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

const mapSpecs = [
	// "./img/Map_of_Maine.svg.js",
	// "./img/Map_of_Maryland.svg.js",
	// "./img/Map_of_Massachusetts.svg.js"
	
	"./img/Map_of_Vermont.svg.js",
	"./img/Map_of_New_Hampshire.svg.js",
	"./img/Map_of_Rhode_Island.svg.js",

	// "./img/Map_of_Kansas.svg.js",
	// "./img/Map_of_Kentucky.svg.js",
	// "./img/Map_of_Minnesota.svg.js",
	// "./img/Map_of_Mississippi.svg.js",
	// "./img/Map_of_Missouri.svg.js",
	// "./img/Map_of_Montana.svg.js",
	// "./img/Map_of_Nebraska.svg.js",
	// "./img/Map_of_New_Jersey.svg.js",
	// "./img/Map_of_North_Carolina.svg.js",
	// "./img/Map_of_Ohio.svg.js",
	// "./img/Map_of_Oklahoma.svg.js",
	// "./img/Map_of_Oregon.svg.js",
	// "./img/Map_of_South_Carolina.svg.js",
	// "./img/Map_of_Tennessee.svg.js",
	// "./img/Map_of_Utah.svg.js",
];

(async () => {
	await auth();

	let total = {done:0, missing:[], other:0}
	for (let mapSpecPath of mapSpecs) {
		let options = require(mapSpecPath);
		let {done, missing, other} = await run(options);
		total.missing = [...total.missing, ...missing];
		total.done += done;
		total.other += other;
	}
	info(total);
})();


// auth
async function auth() {
	try {
		// estabilish session
		await api.login(USERNAME, PASSWORD);
	} catch (error) {
		console.error('Auth error.', error);
	}
}

// main
async function run(options) {
	let {counties, destFileTemplate, srcFilePath} = options;

	console.log("Upload of: ", {srcFilePath, size:counties.length});

	let summary = "fix rendering (remove clipping)";

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
	let other = counties.length - done.length - missing.length;
	let results = {done:done.length, missing, other};
	info(results);
	return results;
}

function info(results) {
	let {done, missing, other} = results;

	// Finally dump list of missing files.
	if (missing.length) {
		console.warn("Missing:");
		missing.forEach((item) => {
			console.warn(item);
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
