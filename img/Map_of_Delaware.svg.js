
let stateName = 'Delaware';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Kent","New_Castle","Sussex"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
