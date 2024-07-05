
let stateName = 'Nevada';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

let counties = [
	{id: 'Carson_City', destFileName: 'Map of Nevada highlighting Carson City.svg'},
	"Churchill","Clark","Douglas","Elko","Esmeralda","Eureka","Humboldt","Lander","Lincoln","Lyon","Mineral","Nye","Pershing","Storey","Washoe","White_Pine"
];
// counties = [
// 	{id: 'Carson_City', destFileName: 'Map of Nevada highlighting Carson City.svg'},
// ];


module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
