// const { login, getCsrfToken, fileExists, uploadFile } = require("./api-helper");

const { MwApi } = require("./mw-api");

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');
let { ids } = require("./img/ny_ids");
const { replaceUseHref } = require("./ny_replace");

let api = new MwApi(apiUrl);

// TODO:
// When missing add to missing list.
// Finally dump list of missing files.
// Show stats: missing count, uploaded count.

(async () => {
	try {
		// estabilish session
		await api.login(USERNAME, PASSWORD);
	} catch (error) {
		console.error('Auth error.', error);
	}

	let srcFilePath = 'img/Map_of_New_York.svg';
	let summary = "fix rendering (remove clipping)";
	let destFileTemplate = (id)=>`Map_of_New_York_highlighting_${id}_County.svg`;

	// Loop over named ids in the map (or maybe predefined list...).
	ids = [
		"Albany",
		"Allegany",
	]		
	for (const id of ids) {
		let destFileName = destFileTemplate(id);
		try {
			// If exists upload new file as `Map_of_New_York_highlighting_${id}_County.svg`
			if (await api.fileExists(destFileName)) {
				// Change current id in `<use xlink:href="#Rensselaer" stroke="none" fill="red" />`
				let result = replaceUseHref(srcFilePath, id);
				if (!result) {
					throw "Unable to replace";
				}
				// await api.upload(srcFilePath, destFileName, summary);
				console.log(`File uploaded as: ${destFileName}.`);
			} else {
				console.warn(`File:${destFileName} does not exist on Commons.`);
			}
		} catch (error) {
			console.error(`Unable to upload File:${destFileName}.`, error);
			// Upon error stop (at least for now).
			break;
		}
	}
})();
