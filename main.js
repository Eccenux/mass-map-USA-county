const { login, getCsrfToken, fileExists, uploadFile } = require("./api-helper");

const filePath = 'Map_of_New_York.svg'; // Change to your file path

(async () => {
	try {
		const { cookie } = await login();
		const csrfToken = await getCsrfToken(cookie);

		const commonsName = 'Map_of_New_York_highlighting_Putnam_County.svg';
		if (await fileExists(commonsName, cookie)) {
			await uploadFile(commonsName, filePath, csrfToken, cookie);
			console.log('File uploaded successfully.');
		} else {
			console.log('File does not exist on Commons.');
		}
	} catch (error) {
		console.error('Error:', error);
	}
})();
