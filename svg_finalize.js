const fs = require('fs');
const { JSDOM } = require('jsdom');

// List SVG files in the current directory
const basePath = './img/todo';
const files = fs.readdirSync('./img/todo');
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
		const data = fs.readFileSync(svgPath, 'utf8');
		const dom = new JSDOM(data);
		const document = dom.window.document;
		const svg = document.querySelector('svg');

		// Execute functions
		const counties = findCounties(svg);
		whResize(svg, svgPath);

		// Create svgfile.js with the data
		const content = generateFileContent(stateName, counties);
		fs.writeFileSync(jsPath, content);
	} catch (err) {
		console.error(`Error processing file ${svgFile}:`, err);
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
 * Resize image as displayed in a browser.
 * @param {SVGElementTagNameMap} svg element.
 * @param {String} svgPath path to file.
 */
function whResize(svg, svgPath) {
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
	console.log(`${svgPath};`, {width, height, divide, n_w, n_h});
	if (divide > 1.0) {
		console.log(`resizing ${svgPath}`);
		let content = fs.readFileSync(svgPath, 'utf8');
		content = content
			.replace(/(<svg[^>]+ width=")[^"]+/, '$1'+n_w)
			.replace(/(<svg[^>]+ height=")[^"]+/, '$1'+n_h)
		;
		fs.writeFileSync(svgPath, content);
	}
}

function generateFileContent(stateName, counties) {
	// Generate the content of the new .js file
	return `
let stateName = '${stateName}';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = [${counties.map(id => `'${id}'`).join(', ')}];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
`;
}