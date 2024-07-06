/**
 * Simple fix of the clipPath problem.
 * 
 * Doesn't do much of optimization and UX transforms done in `svg_finalize.js`.
 */

const fs = require('fs');
const { JSDOM } = require('jsdom');

const basePath = './img/temp/src';
const destPath = './img/temp/final';
const files = fs.readdirSync(basePath);
const svgFiles = files.filter(file => file.endsWith('.svg'));
svgFiles.forEach(svgFile => {
	processSVG(basePath, svgFile);
});

/**
 * Main
 */
function processSVG(baseSrcPath, svgFile, baseDstPath = destPath) {
	try {
		// Paths
		const srcPath = baseSrcPath+'/'+svgFile;
		const dstPath = baseDstPath+'/'+svgFile;

		// Read the content of each SVG file
		let content = fs.readFileSync(srcPath, 'utf8');

		// check if the file has already been cleaned
		if (content.indexOf('<clipPath') < 0) {
			console.log(`NOP ${svgFile}`);
			return;
		}

		// DOM
		const dom = new JSDOM(content);
		const document = dom.window.document;
		const svg = document.querySelector('svg');

		// find/create defs
		let defs = document.querySelector('defs');
		if (!defs) {
			defs = document.createElement('defs');
			svg.prepend(defs);
		}

		// move clip to defs
		fixCliping(document, defs);

		// color
		colorMod(document);
	
		// save the modified SVG
		saveAsSvg(dstPath, document);
		console.log(`Done ${svgFile}`);
	} catch (err) {
		console.error(`Error processing file ${svgFile}:`, err);
		return;
	}
}

/**
 * Save to a new SVG file.
 * @param {String} dstPath For a new SVG.
 * @param {Document} document The modfied document.
 */
function saveAsSvg(dstPath, document) {
	
	let content = document.querySelector('svg').outerHTML;
	content = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n` + content;
	fs.writeFileSync(dstPath, content);
}

/**
 * Move clipping to defs and transform it.
 * 
 * @param {Document} document 
 * @param {HTMLElement} defs 
 */
function fixCliping(document, defs) {
	// Get clipPath tag and change node name to "g"
	const clipPaths = document.querySelectorAll('clipPath');
	for (const clipPath of clipPaths) {
		const g = document.createElement('g');
		g.id = clipPath.id;
		// Move all children of clipPath to the new g element
		while (clipPath.firstChild) {
			g.appendChild(clipPath.firstChild);
		}
		// Append the new g element to defs and remove the original clipPath element
		defs.appendChild(g);
		clipPath.remove();
	}
}

/**
 * New colors of tiles.
 * @param {Document} document 
 */
function colorMod(document) {
	// Change fill color of the <use> element
	const useElement = document.querySelector('use[xlink\\:href="#state_outline"]');
	if (useElement) {
		useElement.setAttribute('fill', '#fdf9d2');
	}	
}

