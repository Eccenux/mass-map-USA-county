// const { login, getCsrfToken, fileExists, uploadFile } = require("./api-helper");

const { MwApi } = require("./mw-api");

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');

let api = new MwApi(apiUrl);

// TODO:
// Loop over named ids in the map (or maybe predefined list...).
// Change current id in `<use xlink:href="#Rensselaer" stroke="none" fill="red" />`
// If exists upload new file as `Map_of_New_York_highlighting_${id}_County.svg`
// When missing add to missing list.
// Upon error stop (at least for now).
// Finally dump list of missing files.
// Show stats: missing count, uploaded count.

(async () => {
	try {
		// estabilish session
		await api.login(USERNAME, PASSWORD);

		let srcFilePath = 'Map_of_New_York.svg';
		let destFileName = 'Map_of_New_York_highlighting_Putnam_County.svg';
		let summary = "fix rendering (remove clipping)";
		if (await api.fileExists(destFileName)) {
			await api.upload(srcFilePath, destFileName, summary);
			console.log(`File uploaded as: ${destFileName}.`);
		} else {
			console.warn(`File:${destFileName} does not exist on Commons.`);
		}
	} catch (error) {
		console.error('Error:', error);
	}
})();
