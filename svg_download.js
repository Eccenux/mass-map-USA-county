const { MwReadApi } = require('./lib/mw-read-api');

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const outputPath = './img/temp/src';

// Download all SVG files for a given `categoryName`
(async () => {
	const api = new MwReadApi(apiUrl, outputPath);
	const categoryName = 'Locator maps of counties of New Mexico';

	// let titles = await api.fetchCategoryMembers(categoryName);
	// let re = await api.fetchImageUrl(titles);
	// console.log(re);

	let filter = (file=>file.search(/\.svg$/)>=0);
	await api.processCategory(categoryName, filter);

	console.log('Done');
})();
