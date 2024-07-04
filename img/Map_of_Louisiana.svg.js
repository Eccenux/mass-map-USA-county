
let stateName = 'Louisiana';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_Parish.svg';

const counties = [
	// {id: "Saint_Bernard", destFileName: 'Map of Louisiana highlighting St. Bernard Parish.svg'},
	// "Acadia","Ascension","Assumption","Avoyelles","Beauregard","Bienville","Bossier","Caddo","Calcasieu","Caldwell","Cameron","Catahoula","Claiborne","Concordia",
	"Allen",
	"DeSoto","East_Baton_Rouge","East_Carroll","East_Feliciana","Evangeline","Franklin","Grant","Iberia","Iberville","Jackson","Jefferson","Jefferson_Davis","La_Salle","Lafayette","Lafourche","Lincoln","Livingston","Madison","Morehouse","Natchitoches","Orleans","Ouachita","Plaquemines","Pointe_Coupee","Rapides","Red_River","Richland","Sabine","Saint_Charles","Saint_Helena","Saint_James","Saint_John_the_Baptist","Saint_Landry","Saint_Martin","Saint_Mary","Saint_Tammany","Tangipahoa","Tensas","Terrebonne","Union","Vermilion","Vernon","Washington","Webster","West_Baton_Rouge","West_Carroll","West_Feliciana","Winn"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
