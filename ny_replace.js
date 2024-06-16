const fs = require('fs');

const regex = /<use xlink:href="#([^"]+)" stroke="none" fill="red" \/>/;

function replaceUseHref(filePath, newId) {
	const data = fs.readFileSync(filePath, 'utf8');

	let replacement = `<use xlink:href="#${newId}" stroke="none" fill="red" />`;
	let ok = false;
	const result = data.replace(regex, (a, matchedId) => {
		if (newId === matchedId) {
			ok = true;
			return a;
		}
		if (replacement != a) {
			ok = true;
			return replacement;
		}
		console.warn("Very weird", {a, matchedId, replacement});
		return a;
	});
	if (!ok) {
		throw "Replace failed";
	}

	fs.writeFileSync(filePath, result, 'utf8');
}

module.exports = {
	replaceUseHref,
};
