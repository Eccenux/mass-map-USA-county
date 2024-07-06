const request = require('request-promise-native');
const fs = require('fs');
const path = require('path');

/**
 * Read/download API.
 */
class MwReadApi {
	constructor(apiUrl = 'https://commons.wikimedia.org/w/api.php', outputPath = './img/temp/src') {
		this.apiUrl = apiUrl;
		this.outputPath = outputPath;
		this.headers = {
			'User-Agent': 'MassMapFix/0.0 (User:Nux)',
		}
	}

	/** Download all files in a acategory. */
	async processCategory(category, filter = false) {
		let fileTitles;
		try {
			fileTitles = await this.fetchCategoryMembers(category);
			console.log(`Found ${fileTitles.length} files in the category.`);
			if (filter) {
				fileTitles = fileTitles.filter(filter);
			}
		} catch (error) {
			console.error('Error processing category:', error);
		}

		let imageUrls = await this.fetchImageUrl(fileTitles);
		for (const imageUrl of imageUrls) {
			const filename = imageUrl.replace(/.+\//, '');
			console.log(`Downloading ${filename}.`);
			try {
				await this.downloadImage(imageUrl, filename);
			} catch (error) {
				console.error(`Error downloading ${filename}:\n`, error);
			}
		}
	}

	/** Fetch a list of files in a category. */
	async fetchCategoryMembers(category) {
		const params = {
			action: 'query',
			list: 'categorymembers',
			cmtitle: `Category:${category}`,
			cmtype: 'file',
			cmlimit: 'max',
			format: 'json'
		};

		try {
			const response = await request({ uri: this.apiUrl, qs: params, json: true, headers: this.headers });
			return response.query.categorymembers.map(member => member.title);
		} catch (error) {
			console.error('Error fetching category members:', error);
			throw error;
		}
	}

	/** Simple chunker. */
	chunkArray(items, size=50) {
		let other = [...items];
		let chunks = [];
		while (other.length > size) {
			chunks.push(other.splice(0,size));
		}
		chunks.push(other);
		return chunks;
	}

	/** Fetch URLs for raw image. */
	async fetchImageUrl(allTitles) {
		// https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&titles=File%3AMap%20of%20New%20Mexico%20highlighting%20Bernalillo%20County.svg%7CFile%3AMap%20of%20New%20Mexico%20highlighting%20Catron%20County.svg&formatversion=2&iiprop=url
		const params = {
			action: 'query',
			prop: 'imageinfo',
			iiprop: 'url',
			format: 'json'
		};

		const chunks = this.chunkArray(allTitles, 10);
		const all = [];
		for (const titles of chunks) {
			try {
				params['titles'] = titles.join('|');
				const response = await request({ uri: this.apiUrl, qs: params, json: true, headers: this.headers });
				const pages = response.query.pages;
				const urls = Object.values(pages).map(page=>page.imageinfo[0].url);
				all.push(...urls);
			} catch (error) {
				console.error(`Error fetching image URLs:`, error);
				throw error;
			}
		}
		return all;
	}

	async downloadImage(url, filename) {
		try {
			const image = await request({ uri: url, encoding: null, headers: this.headers });
			fs.writeFileSync(path.join(this.outputPath, filename), image);
			console.log(`Image ${filename} downloaded successfully.`);
		} catch (error) {
			console.error(`Error downloading image from ${url}:`, error);
			throw error;
		}
	}
}

module.exports = {
	MwReadApi,
}