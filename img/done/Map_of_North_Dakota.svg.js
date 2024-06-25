
let stateName = 'North_Dakota';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Adams","Barnes","Benson","Billings","Bottineau","Bowman","Burke","Burleigh","Cass","Cavalier","Dickey","Divide","Dunn","Eddy","Emmons","Foster","Golden_Valley","Grand_Forks","Grant","Griggs","Hettinger","Kidder","LaMoure","Logan","McHenry","McIntosh","McKenzie","McLean","Mercer","Morton","Mountrail","Nelson","Oliver","Pembina","Pierce","Ramsey","Ransom","Renville","Richland","Rolette","Sargent","Sheridan","Sioux","Slope","Stark","Steele","Stutsman","Towner","Traill","Walsh","Ward","Wells","Williams"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
