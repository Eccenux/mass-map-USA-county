const fs = require('fs');
const path = require('path');

function replaceUseHref(filePath, id) {
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error(`Error reading file: ${err}`);
			return;
		}

		const regex = new RegExp(`<use xlink:href="#${id}" stroke="none" fill="red" />`, 'g');
		const replacement = `<use href="#${id}" stroke="none" fill="red" />`;
		const result = data.replace(regex, replacement);

		fs.writeFile(filePath, result, 'utf8', (err) => {
			if (err) {
				console.error(`Error writing file: ${err}`);
			} else {
				console.log('File updated successfully');
			}
		});
	});
}

module.exports = {
	replaceUseHref,
};
