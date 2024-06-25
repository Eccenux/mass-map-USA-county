
let stateName = 'Connecticut';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Fairfield","Hartford","Litchfield","Middlesex","New_Haven","New_London","Tolland","Windham"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
