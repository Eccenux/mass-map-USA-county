
let stateName = 'Massachusetts';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Barnstable","Berkshire","Bristol","Dukes","Essex","Franklin","Hampden","Hampshire","Middlesex","Nantucket","Norfolk","Plymouth","Suffolk","Worcester"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
