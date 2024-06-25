/**
 * Upload multiple maps with a highlighted element.
 * 
 * This assumes you can highlight an element by id.
 */
const { MwApi } = require("./mw-api");

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');
// let { counties, destFileTemplate, srcFilePath } = require("./img/usa_ids");
const { replaceUseHref } = require("./usa_replace");

let api = new MwApi(apiUrl);

// let summary = "fix rendering (remove clipping)";
let summary = "uniform colors with good contrast";

// Extra seconds needed for limits...
let waitSec = 8;

const mapSpecs = [
	// small
	// "./img/Map_of_Connecticut.svg.js",
	// "./img/Map_of_Delaware.svg.js",
	// "./img/Map_of_Hawaii.svg.js",

	// medium-big
	"./img/Map_of_Alabama.svg.js",
	"./img/Map_of_Arkansas.svg.js",
	"./img/Map_of_Georgia.svg.js",
	"./img/Map_of_Idaho.svg.js",
	"./img/Map_of_Illinois.svg.js",
	"./img/Map_of_Indiana.svg.js",
	"./img/Map_of_Iowa.svg.js",
	"./img/Map_of_New_York.svg.js",
	"./img/Map_of_North_Dakota.svg.js",
	"./img/Map_of_South_Dakota.svg.js",

	// complex mapping
	// "./img/Map_of_Alaska.svg.js",
];
// let extraMapping = {
// 	"./img/Map_of_Missouri.svg.js": [
// 		{id: 'Saint_Louis_City', 		destFileName: 'Map of Missouri highlighting Saint Louis City.svg'},
// 		{id: 'Saint_Charles', 	 		destFileName: 'Map of Missouri highlighting St. Charles County.svg'},
// 		{id: 'Sainte_Genevieve', 		destFileName: 'Map of Missouri highlighting Ste. Genevieve County.svg'},
// 	],
// 	"./img/Map_of_Kentucky.svg.js": [
// 		{id: 'Larue', 					destFileName: 'Map of Kentucky highlighting LaRue County.svg'},
// 	],
// 	"./img/Map_of_Michigan.svg.js": [
// 		{id: 'Saint_Clair',             destFileName: 'Map of Michigan highlighting St. Clair County.svg'}
// 	],
// };

(async () => {
	await auth();

	let total = {missing:[], error:[], done:0, other:0}
	for (let mapSpecPath of mapSpecs) {
	// for (let mapSpecPath in extraMapping) {
		let options = require(mapSpecPath);
		// options.counties = extraMapping[mapSpecPath];

		let {done, missing, error, other} = await run(options, waitSec);
		total.missing = [...total.missing, ...missing];
		total.error = [...total.error, ...error];
		total.done += done;
		total.other += other;
		info(total, false);
	}
	info(total);
})();

function sleep(s) {
	let minutes = Math.floor(s / 60);
	let seconds = s % 60;
	let info = minutes > 0 ? `${minutes}:${seconds} [min:s]` : `${s} [s]`;
	console.log(`Waiting... ${info}`);
	return new Promise(resolve => setTimeout(resolve, s * 1000));
}

// auth
async function auth() {
	try {
		// estabilish session
		await api.login(USERNAME, PASSWORD);
	} catch (ex) {
		console.error('Auth error.', ex);
	}
}

/**
 * Main.
 * @param {Object} options State specific options.
 * @param {Number} waitSec Extra seconds needed for limits...
 * @returns {done:int, missing:[], error:[], other:int}
 */
async function run(options, waitSec = 8) {
	let {counties, destFileTemplate, srcFilePath} = options;

	console.log("Upload of: ", {srcFilePath, size:counties.length});

	// Loop over named ids in the map (or maybe predefined list...).
	let done = [];
	let missing = [];
	let error = [];
	const startTime = Date.now();
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
		} catch (ex) {
			console.error(`Unable to upload File:${destFileName}.`, ex);
			error.push({id, destFileName});
			await sleep(30); // extra
			// Upon error stop (at least for now).
			// break;
		}
		await sleep(waitSec);
	}
	const endTime = Date.now();
	const elapsed = (endTime - startTime)/1000;
	console.log(`Elapsed time: ${elapsed.toFixed(1)} [seconds]`);
	console.log(`Records per minute: ${(counties.length / elapsed * 60.0).toFixed(2)}`);

	let other = counties.length - done.length - missing.length;
	let results = {done:done.length, missing, error, other};
	info(results);
	return results;
}

function info(results, verbose=true) {
	let {done, missing, error, other} = results;

	// Finally dump list of missing files.
	if (verbose && missing.length) {
		console.warn("Missing:");
		missing.forEach((item) => {
			console.warn(item);
		});
	}
	if (verbose && error.length) {
		console.warn("Error:");
		error.forEach((item) => {
			console.error(item);
		});
	}
	// Show stats: missing count, uploaded count.
	console.info(`Uploaded: ${done}; missing: ${missing.length}; other: ${other}`);
}
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
