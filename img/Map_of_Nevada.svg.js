
let stateName = 'Nevada';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Carson_City","Churchill","Clark","Douglas","Elko","Esmeralda","Eureka","Humboldt","Lander","Lincoln","Lyon","Mineral","Nye","Pershing","Storey","Washoe","White_Pine"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
