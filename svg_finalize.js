const fs = require('fs');
const { JSDOM } = require('jsdom');

//
// Generate JS-counties files.
// BTW. Automatic resize of SVG.
//
// const basePath = './img/todo/spec';
const basePath = './img/';
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

		// Execute transforms
		const counties = findCounties(svg);
		content = whResize(svg, content);
		content = colorMod(svg, content);
		fs.writeFileSync(svgPath, content);

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
 * Find ids of counties while the SVG is open.
 * Skips numeric ids. The rest should be counties.
 */
function findCounties(svg) {
	// only children of main group
	// `<svg> → <g stroke="black" fill="white"> → <svgPath/g id>`
	const ids = [...svg.querySelectorAll('svg > g > [id]')]
		.map(el=>el.id)
		.filter(id=>id.replace(/[0-9]+/, '').length>1)
	;
	return ids;
}

/**
 * New colors of tiles.
 * @param {SVGElementTagNameMap} svg element.
 * @param {String} content File content.
 */
function colorMod(svg, content) {
	
	content = content
		.replace(/stroke="(<g stroke="black" fill=")(?:white|none)(" )/, '$1#fdf9d2$2')
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