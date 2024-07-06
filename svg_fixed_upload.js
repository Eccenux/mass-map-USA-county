/**
 * Upload multiple, fixed SVG files.
 */
const { MwApi } = require("./mw-api");
const fs = require('fs');
const path = require('path');

const apiUrl = 'https://commons.wikimedia.org/w/api.php';
const { USERNAME, PASSWORD } = require('./bot.config');

let api = new MwApi(apiUrl);

// /---- Settings ----
const basePath = './img/temp/final';

let summary = "fix rendering (remove clipping), uniform colors";
// let summary = "uniform colors with good contrast";

// Extra seconds needed for limits...
let waitSec = 8;

// Quick (for small-ish batches around 200 files)
// let waitSec = 0;
// \---- Settings ----


(async () => {
	await auth();

	const files = fs.readdirSync(basePath);
	const svgFiles = files.filter(file => file.endsWith('.svg'));
	
	await run(svgFiles, waitSec);
})();

function sleep(s) {
	if (s > 0.01) {
		let minutes = Math.floor(s / 60);
		let seconds = s % 60;
		let info = minutes > 0 ? `${minutes}:${seconds} [min:s]` : `${s} [s]`;
		console.log(`Waiting... ${info}`);
	}
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
 * @param {Object} svgFiles List of files.
 * @param {Number} waitSec Extra seconds needed for limits...
 * @returns {done:int, missing:[], error:[], other:int}
 */
async function run(svgFiles, waitSec = 8) {
	let done = [];
	let missing = [];
	let error = [];
	const startTime = Date.now();
	for (const svgFile of svgFiles) {
		let destFileName = decodeURIComponent(svgFile);
		let id = '-';
		try {
			// If exists upload a new version
			if (await api.fileExists(destFileName)) {
				await api.upload(path.join(basePath, svgFile), destFileName, summary);
				console.log(`File uploaded as: ${destFileName}.`);
				done.push({id, destFileName});
			} else {
				// When missing add to missing list.
				console.warn(`File:${destFileName} does not exist on Commons.`);
				missing.push({id, destFileName});
			}
		} catch (ex) {
			if (ex.code && ex.code === 'fileexists-no-change') {
				console.log(`File was already uploaded as: ${destFileName}.`);
				done.push({id, destFileName});
			} else {
				console.error(`Unable to upload File:${destFileName}.`, ex);
				error.push({id, destFileName});
				await sleep(30); // extra
				// Upon error stop (at least for now).
				// break;
			}
		}
		await sleep(waitSec);
	}
	const endTime = Date.now();
	const elapsed = (endTime - startTime)/1000;
	console.log(`Elapsed time: ${elapsed.toFixed(1)} [seconds]`);
	console.log(`Records per minute: ${(svgFiles.length / elapsed * 60.0).toFixed(2)}`);

	let other = svgFiles.length - done.length - missing.length;
	let results = {done:done.length, missing, error, other};
	info(results);
	return results;
}

function formatArray(arr) {
	return JSON.stringify(arr)
		.replace(/(\},|\[)/g, '$1\n\t')
		.replace('}]', '}\n];\n')
	;
}
function info(results, verbose=true) {
	let {done, missing, error, other} = results;

	// Finally dump list of missing files.
	if (verbose && missing.length) {
		console.warn("var missing = " + formatArray(missing));
	}
	if (verbose && error.length) {
		console.error("var error = " + formatArray(error));
	}
	// Show stats: missing count, uploaded count.
	console.info(`Uploaded: ${done}; missing: ${missing.length}; other: ${other}`);
}
