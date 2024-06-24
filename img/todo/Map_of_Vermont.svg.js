
let stateName = 'Vermont';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Addison', 'Bennington', 'Caledonia', 'Chittenden', 'Essex', 'Franklin', 'Grand_Isle', 'Lamoille', 'Orange', 'Orleans', 'Rutland', 'Washington', 'Windham', 'Windsor'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
