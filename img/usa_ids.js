/**
 * Find state ids while the SVG is open.
 * Skips numeric ids. The rest should be counties.
 */
function findIds() {
	// only children of main group
	// `<svg> → <g stroke="black" fill="white"> → <path/g id>`
	var ids = [...document.querySelectorAll('svg > g > [id]')]
		.map(el=>el.id)
		.filter(id=>id.replace(/[0-9]+/, '').length>1)
	;
	console.log(ids.length);
	copy(ids);
}
function whResize() {
	var divide = 3.5;

	var svg = document.querySelector('svg');
	var width = svg.getAttribute('width');
	var height = svg.getAttribute('height');
	function resize(x) {
		return (Number.parseFloat(x) / divide).toFixed(2);
	}
	width=resize(width);
	height=resize(height);
	console.log(`width="${width}" height="${height}"`)
}
// findIds();whResize();

let stateName = 'Iowa';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Adair",
	"Adams",
	"Allamakee",
	"Appanoose",
	"Audubon",
	"Benton",
	"Black_Hawk",
	"Boone",
	"Bremer",
	"Buchanan",
	"Buena_Vista",
	"Butler",
	"Calhoun",
	"Carroll",
	"Cass",
	"Cedar",
	"Cerro_Gordo",
	"Cherokee",
	"Chickasaw",
	"Clarke",
	"Clay",
	"Clayton",
	"Clinton",
	"Crawford",
	"Dallas",
	"Davis",
	"Decatur",
	"Delaware",
	"Des_Moines",
	"Dickinson",
	"Dubuque",
	"Emmet",
	"Fayette",
	"Floyd",
	"Franklin",
	"Fremont",
	"Greene",
	"Grundy",
	"Guthrie",
	"Hamilton",
	"Hancock",
	"Hardin",
	"Harrison",
	"Henry",
	"Howard",
	"Humboldt",
	"Ida",
	"Iowa",
	"Jackson",
	"Jasper",
	"Jefferson",
	"Johnson",
	"Jones",
	"Keokuk",
	"Kossuth",
	"Lee",
	"Linn",
	"Louisa",
	"Lucas",
	"Lyon",
	"Madison",
	"Mahaska",
	"Marion",
	"Marshall",
	"Mills",
	"Mitchell",
	"Monona",
	"Monroe",
	"Montgomery",
	"Muscatine",
	"O'Brien",
	"Osceola",
	"Page",
	"Palo_Alto",
	"Plymouth",
	"Pocahontas",
	"Polk",
	"Pottawattamie",
	"Poweshiek",
	"Ringgold",
	"Sac",
	"Scott",
	"Shelby",
	"Sioux",
	"Story",
	"Tama",
	"Taylor",
	"Union",
	"Van_Buren",
	"Wapello",
	"Warren",
	"Washington",
	"Wayne",
	"Webster",
	"Winnebago",
	"Winneshiek",
	"Woodbury",
	"Worth",
	"Wright"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
