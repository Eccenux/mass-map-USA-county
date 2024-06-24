
let stateName = 'Maryland';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Allegany","Anne_Arundel","Baltimore","Baltimore_City","Calvert","Caroline","Carroll","Cecil","Charles","Dorchester","Frederick","Garrett","Harford","Howard","Kent","Montgomery","Prince_George's","Queen_Anne's","Saint_Mary's","Somerset","Talbot","Washington","Wicomico","Worcester"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
