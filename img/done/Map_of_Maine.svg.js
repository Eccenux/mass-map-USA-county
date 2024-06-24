
let stateName = 'Maine';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Androscoggin","Aroostook","Cumberland","Franklin","Hancock","Kennebec","Knox","Lincoln","Oxford","Penobscot","Piscataquis","Sagadahoc","Somerset","Waldo","Washington","York"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
