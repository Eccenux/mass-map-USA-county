
let stateName = 'Rhode_Island';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Bristol","Kent","Newport","Providence","Washington"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
