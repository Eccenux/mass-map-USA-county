
let stateName = 'New_Hampshire';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Belknap', 'Carroll', 'Cheshire', 'Coos', 'Grafton', 'Hillsborough', 'Merrimack', 'Rockingham', 'Strafford', 'Sullivan'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
