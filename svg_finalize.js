/**
 * Generate JS-counties files and transform SVG.
 */

const fs = require('fs');
const { JSDOM } = require('jsdom');

// const basePath = './img/todo/spec';
const basePath = './img/todo';
const files = fs.readdirSync(basePath);
const svgFiles = files.filter(file => file.endsWith('.svg'));
svgFiles.forEach(svgFile => {
	processSVG(basePath, svgFile);
});

/**
 * Main
 */
function processSVG(basePath, svgFile) {
	try {
		// State
		const stateName = svgFile.replace(/Map_of_(.+)\.svg/, '$1');
		// Paths
		const svgPath = basePath+'/'+svgFile;
		const jsPath = basePath+'/'+svgFile+'.js';

		// Read the content of each SVG file as DOM
		let content = fs.readFileSync(svgPath, 'utf8');
		const dom = new JSDOM(content);
		const document = dom.window.document;
		const svg = document.querySelector('svg');

		// county data (id)
		const counties = findCounties(svg);

		// Execute transforms
		// check if the file has already been cleaned
		if (content.indexOf('<clipPath') >= 0) {
			// Step. 1. DOCTYPE is redundant.
			content = content.replace(/<!DOCTYPE svg PUBLIC[^>]+>\s*/, '');

			// Step. 2. Remove clip-path="url(#state_clip_path)" and <use xlink:href="#state_outline".
			content = content
				.replace(/ clip-path="[^"]+"/, '')
				.replace(/<use[^>]+xlink:href="#state_outline"[^>]+>\s*/, '')
			;

			// Step. 3. Replace or remove clipPath
			content = clipPathReplace(svg, content);

			// Step. 4. Change fill="none" land color for the main `g` and modify highlight color
			content = colorMod(svg, content);

			// Step. 5. Resize width="6233.5" height="4510.9" so that height is about 1000-1200 px (this is for better SVG viewing).
			content = whResize(svg, content);

			// save
			fs.writeFileSync(svgPath, content);
		}

		// Create svgfile.js with the data
		const jsContent = generateFileContent(stateName, counties);
		fs.writeFileSync(jsPath, jsContent);

		console.log(`Done ${svgFile}: counties: ${counties.length}`);
	} catch (err) {
		console.error(`Error processing file ${svgFile}:`, err);
		return;
	}
}

/**
 * Find ids of counties in the SVG.
 * Skips numeric ids. The rest should be counties.
 */
function findCounties(svg) {
	// only children of main group
	// `<svg> → <g stroke="black" fill="white"> → <svgPath/g id>`
	const ids = [...svg.querySelectorAll('svg > g > [id]')]
		.map(el=>el.id)
		.filter(id=>id.replace(/(path|g)?[0-9]+/, '').length>1)
	;
	return ids;
}

/**
 * Replace clipPath with defs or remove it.
 * 
 * Note! defs can be removed if none of the ids is used outside of defs.
 * 
 * @param {SVGElementTagNameMap} svg element.
 * @param {String} content File content.
 */
function clipPathReplace(svg, content) {
	const hrefs = [...svg.querySelectorAll('clipPath > [id]')]
		.map(el=>el.id)
		.filter(id=>id!=='state_outline')
		.map(id=>`href="#${id}"`)
	;

	let used = false;
	for (const href of hrefs) {
		if (content.includes(href)) {
			used = true;
			break;
		}
	}

	if (used) {
		content = content.replace(/(<\/?)clipPath[^>]*>/g, '$1defs>');
	} else {
		content = content.replace(/<clipPath[^>]*>[\s\S]+?<\/clipPath>/g, '');
	}

	return content;
}

/**
 * New colors of tiles.
 * @param {SVGElementTagNameMap} svg element.
 * @param {String} content File content.
 */
function colorMod(svg, content) {
	
	content = content
		.replace(/(<g stroke="black" fill=")(?:white|none)(" )/, '$1#fdf9d2$2')
		.replace(/(<use xlink:href="#(?:[^"]+)" stroke="none" fill=")red/, '$1#E60000')
	;
	return content;
}

/**
 * Resize image as displayed in a browser.
 * @param {SVGElementTagNameMap} svg element.
 * @param {String} content File content.
 */
function whResize(svg, content) {
	function parse(xstr) {
		return Number.parseFloat(xstr);
	}
	function resize(x, divide) {
		return (x / divide).toFixed(2);
	}

	let width = parse(svg.getAttribute('width'));
	let height = parse(svg.getAttribute('height'));
	let divide = 1.0;
	while (divide < 9.0) {
		if (height / divide < 1200) {
			break;
		}
		divide += 0.5;
	}
	let n_w = resize(width, divide);
	let n_h = resize(height, divide);

	// Print width and height attributes divided by two
	console.log('whResize', {width, height, divide, n_w, n_h});
	if (divide > 1.0) {
		content = content
			.replace(/(<svg[^>]+ width=")[^"]+/, '$1'+n_w)
			.replace(/(<svg[^>]+ height=")[^"]+/, '$1'+n_h)
		;
	}
	return content;
}

function generateFileContent(stateName, counties) {
	// Generate the content of the new .js file
	return `
let stateName = '${stateName}';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ${JSON.stringify(counties)};

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
`;
}