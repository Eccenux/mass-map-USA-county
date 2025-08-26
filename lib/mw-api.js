/*  
    Auth and upload files.
 
    MediaWiki API Demos
    Demo of `Upload` module: Sending post request to upload a file directly.
	Note that the `request` module is able to estabilish a session with cookies
	(keeps cookies set by the server in an initial request).

    MIT license
*/
const fs = require('fs');
const request = require('request').defaults({
	jar: true,
	headers: { 
		"User-Agent": "NuxSvgBot/1.1 (https://meta.wikimedia.org/wiki/User:Nux; egil@wp.pl)" 
	},
});

class MwApi {
	constructor(apiUrl = 'https://commons.wikimedia.org/w/api.php') {
		this.apiUrl = apiUrl
	}

	/**
	 * Authenticate and get edit token.
	 * 
	 * Use of main account for login is not supported.
	 * Obtain credentials for lgname & lgpassword via:
	 * https://test.wikipedia.org/wiki/Special:BotPasswords
	 * 
	 * @param {String} username bot name (lgname)
	 * @param {String} password bot password (lgpassword)
	 */
	async login(username, password) {
		const loginToken = await this.getLoginToken();
		const loginData = await this.loginRequest(loginToken, username, password);
		if (loginData?.login?.result === 'Success') {
			console.log(`Auth as ${username} succesfull.`);
		} else {
			console.error(`Auth as ${username} failed.`, JSON.stringify(loginData));
			throw "Failed auth";
		}
	
		await this.saveCsrfToken();
	}

	/** @private Step 1: GET request to fetch login token and init session. */
	getLoginToken() {
		let params = {
			action: "query",
			meta: "tokens",
			type: "login",
			format: "json"
		};

		return new Promise((resolve, reject) => {
			request.get({ url: this.apiUrl, qs: params }, (error, res, body) => {
				if (error) {
					reject(error);
					return;
				}
				var data = JSON.parse(body);
				resolve(data.query.tokens.logintoken);
			});
		})
	}
	/** @private Step 2: POST request to log in. */
	loginRequest(loginToken, username, password) {
		let params = {
			action: "login",
			lgname: username,
			lgpassword: password,
			lgtoken: loginToken,
			format: "json"
		};

		return new Promise((resolve, reject) => {
			request.post({ url: this.apiUrl, form: params }, (error, res, body) => {
				if (error) {
					reject(error);
					return;
				}
				var data = JSON.parse(body);
				resolve(data);
			});
		});
	}
	/** @private Step 3: Fetch and save internaly a CSRF token for edits and changes. */
	saveCsrfToken() {
		let params = {
			action: "query",
			meta: "tokens",
			format: "json"
		};

		return new Promise((resolve, reject) => {
			request.get({ url: this.apiUrl, qs: params }, (error, res, body)  => {
				if (error) {
					reject(error);
					return;
				}
				let data = JSON.parse(body);
				this.csrfToken = data.query.tokens.csrftoken;
				resolve(data);
			});
		});
	}

	/** Check if file exists on the server. */
	fileExists(destFileName) {
		let params = {
			action: "query",
			titles: `File:${destFileName}`,
			format: "json"
		};

		return new Promise((resolve, reject) => {
			request.get({ url: this.apiUrl, qs: params }, (error, res, body)  => {
				if (error) {
					reject(error);
					return;
				}
				let data = JSON.parse(body);
				const pages = data.query.pages;
				resolve(!pages.hasOwnProperty("-1"));
			});
		});
	}	

	/** Upload a file directly. */
	upload(srcFilePath, destFileName, summary = "quick edit") {
		let params = {
			action: "upload",
			filename: destFileName,
			ignorewarnings: "1",
			token: this.csrfToken,
			comment: summary,
			format: "json"
		};

		var file = {
			file: fs.createReadStream(srcFilePath)
		};

		var formData = Object.assign( {}, params, file );

		return new Promise((resolve, reject) => {
			request.post({ url: this.apiUrl, formData: formData }, (error, res, body) => {
				if (error) {
					reject(error);
					return;
				}
				let data;
				try {
					data = JSON.parse(body);
				} catch (ex) {
					reject(ex);
					return;
				}
				if (data.error) {
					reject(data.error);
					return;
				}
				else if (data.upload.result === "Success"){
					resolve(data.upload.result)
					return;
				}
				else {
					reject(data.upload.result)
					return;
				}
			});
		});
	}

}

module.exports = {
	MwApi,
}