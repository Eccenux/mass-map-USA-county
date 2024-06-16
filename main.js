// const { login, getCsrfToken, fileExists, uploadFile } = require("./api-helper");

const { MwApi } = require("./mw-api");

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');
let { ids } = require("./img/ny_ids");
const { replaceUseHref } = require("./ny_replace");

let api = new MwApi(apiUrl);

/**/
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
	let done = [];
	let missing = [];
	// ids = [
	// 	"Albany",
	// 	"Allegany",
	// ]		
	for (const id of ids) {
		let destFileName = destFileTemplate(id);
		try {
			// If exists upload new file as `Map_of_New_York_highlighting_${id}_County.svg`
			if (await api.fileExists(destFileName)) {
				// Change current id in `<use xlink:href="#Rensselaer" stroke="none" fill="red" />`
				replaceUseHref(srcFilePath, id);
				await api.upload(srcFilePath, destFileName, summary);
				console.log(`File uploaded as: ${destFileName}.`);
				done.push({id, destFileName});
			} else {
				// When missing add to missing list.
				console.warn(`File:${destFileName} does not exist on Commons.`);
				missing.push({id, destFileName});
			}
		} catch (error) {
			console.error(`Unable to upload File:${destFileName}.`, error);
			// Upon error stop (at least for now).
			break;
		}
	}
	// Finally dump list of missing files.
	if (missing.length) {
		console.warn("Missing:");
		missing.forEach((item) => {
			console.warn(item);
		});
	}
	// Show stats: missing count, uploaded count.
	let other = ids.length - done.length - missing.length;
	console.info(`Uploaded: ${done.length}; missing: ${missing.length}; other: ${other}`);
})();
/**

ids = [
	"Allegany",
	"Albany",
]		
let srcFilePath = 'img/Map_of_New_York.svg';
for (const id of ids) {
	// Change current id in `<use xlink:href="#Rensselaer" stroke="none" fill="red" />`
	replaceUseHref(srcFilePath, id);
}
/**/
