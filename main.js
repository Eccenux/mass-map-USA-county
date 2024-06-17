/**
 * Upload multiple maps with a highlighted element.
 * 
 * This assumes you can highlight an element by id.
 */
const { MwApi } = require("./mw-api");

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');
let { counties } = require("./img/usa_ids");
const { replaceUseHref } = require("./usa_replace");

let api = new MwApi(apiUrl);

/**/
(async () => {
	try {
		// estabilish session
		await api.login(USERNAME, PASSWORD);
	} catch (error) {
		console.error('Auth error.', error);
	}

	let srcFilePath = 'img/Map_of_Alaska.svg';
	let summary = "fix rendering (remove clipping)";
	let destFileTemplate = (id)=>`Map_of_Alaska_highlighting_${id}_County.svg`;

	// Loop over named ids in the map (or maybe predefined list...).
	let done = [];
	let missing = [];
	// counties = [
	// 	"Albany",
	// 	"Allegany",
	// ]		
	for (const county of counties) {
		let id = '';
		let destFileName = '';
		if (typeof county === 'string') {
			id = county.replace(/ /g, '_');
			destFileName = destFileTemplate(id);
		} else {
			id = county.id.replace(/ /g, '_');
			destFileName = county.destFileName;
		}
		try {
			// If exists upload new file as `Map_of_X_highlighting_${id}_County.svg`
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
			// break;
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
	let other = counties.length - done.length - missing.length;
	console.info(`Uploaded: ${done.length}; missing: ${missing.length}; other: ${other}`);
})();
/**

counties = [
	"Allegany",
	"Albany",
]		
let srcFilePath = 'img/Map_of_New_York.svg';
for (const id of counties) {
	// Change current id in `<use xlink:href="#Rensselaer" stroke="none" fill="red" />`
	replaceUseHref(srcFilePath, id);
}
/**/
