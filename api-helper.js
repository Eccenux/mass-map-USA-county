const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');

const { USERNAME, PASSWORD } = require('./bot.config');
const API_URL = 'https://commons.wikimedia.org/w/api.php';

async function login() {
	let url = API_URL + '?' + new URLSearchParams({
		action: 'query',
		meta: 'tokens',
		type: 'login',
		format: 'json'
	});
	const response = await fetch(url);
	const data = await response.json();
	const loginToken = data.query.tokens.logintoken;
	const cookie = response.headers.get('set-cookie');

	const loginResponse = await fetch(API_URL, {
		method: 'POST',
		body: new URLSearchParams({
			action: 'login',
			lgname: USERNAME,
			lgpassword: PASSWORD,
			lgtoken: loginToken,
			format: 'json'
		}),
		headers: {
			Cookie: cookie,
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	});

	const loginData = await loginResponse.json();
	if (loginData?.login?.result === 'Success') {
		console.log(`Auth as ${USERNAME} succesfull.`);
	} else {
		console.error(`Auth as ${USERNAME} failed.`, JSON.stringify(loginData));
		throw "Failed auth";
	}
	// const cookie = loginResponse.headers.get('set-cookie');
	return { loginToken, cookie };
}

async function getCsrfToken(cookie) {
	let url = API_URL + '?' + new URLSearchParams({
		action: "query",
		meta: "tokens",
		format: "json"
	});
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Cookie: cookie
		}
	});
	const data = await response.json();
	return data.query.tokens.csrftoken;
}

async function fileExists(commonsName, cookie) {
	const response = await fetch(`${API_URL}?action=query&titles=File:${commonsName}&format=json`, {
		method: 'GET',
		headers: {
			Cookie: cookie
		}
	});
	const data = await response.json();
	const pages = data.query.pages;
	return !pages.hasOwnProperty("-1");
}

async function uploadFile(commonsName, filePath, csrfToken, cookie) {
	const form = new FormData();
	form.append('action', 'upload');
	form.append('format', 'json');
	form.append('filename', commonsName);
	form.append('file', fs.createReadStream(filePath));
	form.append('token', csrfToken);
	form.append('ignorewarnings', '1');

	let url = API_URL + '?' + new URLSearchParams({
		// token: csrfToken,
		action: "upload",
		format: "json"
	});

	const headers = Object.assign({
		Cookie: cookie,
	}, form.getHeaders());

	const response = await fetch(url, {
		method: 'POST',
		body: form,
		headers,
	});
	const data = await response.text();
	console.log(data);
}

module.exports = {
	login,
	getCsrfToken,
	fileExists,
	uploadFile
}