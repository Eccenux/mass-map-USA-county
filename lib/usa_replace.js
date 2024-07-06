const fs = require('fs');

const highlightColor = '#E60000';
const regex = /<use xlink:href="#([^"]+)" stroke="none" fill="(red|#E60000)" \/>/;

/**
 * Replace or throw.
 */
function replaceUseHref(filePath, newId) {
	const data = fs.readFileSync(filePath, 'utf8');

	let replacement = `<use xlink:href="#${newId}" stroke="none" fill="${highlightColor}" />`;
	let ok = false;
	const result = data.replace(regex, (a, matchedId) => {
		ok = true;
		if (newId === matchedId) {
			return a;
		}
		return replacement;
	});
	if (!ok) {
		throw "Replace failed";
	}

	fs.writeFileSync(filePath, result, 'utf8');
}

module.exports = {
	replaceUseHref,
};
