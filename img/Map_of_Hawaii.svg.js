
let stateName = 'Hawaii';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Hawaii","Honolulu","Kalawao","Kauai","Maui"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
