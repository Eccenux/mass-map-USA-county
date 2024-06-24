
let stateName = 'South_Carolina';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Abbeville","Aiken","Allendale","Anderson","Bamberg","Barnwell","Beaufort","Berkeley","Calhoun","Charleston","Cherokee","Chester","Chesterfield","Clarendon","Colleton","Darlington","Dillon","Dorchester","Edgefield","Fairfield","Florence","Georgetown","Greenville","Greenwood","Hampton","Horry","Jasper","Kershaw","Lancaster","Laurens","Lee","Lexington","Marion","Marlboro","McCormick","Newberry","Oconee","Orangeburg","Pickens","Richland","Saluda","Spartanburg","Sumter","Union","Williamsburg","York"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
