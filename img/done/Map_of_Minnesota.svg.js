
let stateName = 'Minnesota';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Aitkin","Anoka","Becker","Beltrami","Benton","Big_Stone","Blue_Earth","Brown","Carlton","Carver","Cass","Chippewa","Chisago","Clay","Clearwater","Cook","Cottonwood","Crow_Wing","Dakota","Dodge","Douglas","Faribault","Fillmore","Freeborn","Goodhue","Grant","Hennepin","Houston","Hubbard","Isanti","Itasca","Jackson","Kanabec","Kandiyohi","Kittson","Koochiching","Lac_qui_Parle","Lake","Lake_of_the_Woods","Le_Sueur","Lincoln","Lyon","Mahnomen","Marshall","Martin","McLeod","Meeker","Mille_Lacs","Morrison","Mower","Murray","Nicollet","Nobles","Norman","Olmsted","Otter_Tail","Pennington","Pine","Pipestone","Polk","Pope","Ramsey","Red_Lake","Redwood","Renville","Rice","Rock","Roseau","Saint_Louis","Scott","Sherburne","Sibley","Stearns","Steele","Stevens","Swift","Todd","Traverse","Wabasha","Wadena","Waseca","Washington","Watonwan","Wilkin","Winona","Wright","Yellow_Medicine"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
