
let stateName = 'Florida';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

let counties = [
	{id: 'Saint_Johns', destFileName: 'Map of Florida highlighting St. Johns County.svg'},
	{id: 'Saint_Lucie', destFileName: 'Map of Florida highlighting St. Lucie County.svg'},
	"Alachua","Baker","Bay","Bradford","Brevard","Broward","Calhoun","Charlotte","Citrus","Clay","Collier","Columbia","DeSoto","Dixie","Duval","Escambia","Flagler","Franklin","Gadsden","Gilchrist","Glades","Gulf","Hamilton","Hardee","Hendry","Hernando","Highlands","Hillsborough","Holmes","Indian_River","Jackson","Jefferson","Lafayette","Lake","Lee","Leon","Levy","Liberty","Madison","Manatee","Marion","Martin","Miami-Dade","Monroe","Nassau","Okaloosa","Okeechobee","Orange","Osceola","Palm_Beach","Pasco","Pinellas","Polk","Putnam","Santa_Rosa","Sarasota","Seminole","Sumter","Suwannee","Taylor","Union","Volusia","Wakulla","Walton","Washington"
];
// counties = [
// 	{id: 'Saint_Johns', destFileName: 'Map of Florida highlighting St. Johns County.svg'},
// ]

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
