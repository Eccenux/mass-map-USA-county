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

let stateName = 'Illinois';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Adams",
	"Alexander",
	"Bond",
	"Boone",
	"Brown",
	"Bureau",
	"Calhoun",
	"Carroll",
	"Cass",
	"Champaign",
	"Christian",
	"Clark",
	"Clay",
	"Clinton",
	"Coles",
	"Cook",
	"Crawford",
	"Cumberland",
	"DeKalb",
	"De_Witt",
	"Douglas",
	"DuPage",
	"Edgar",
	"Edwards",
	"Effingham",
	"Fayette",
	"Ford",
	"Franklin",
	"Fulton",
	"Gallatin",
	"Greene",
	"Grundy",
	"Hamilton",
	"Hancock",
	"Hardin",
	"Henderson",
	"Henry",
	"Iroquois",
	"Jackson",
	"Jasper",
	"Jefferson",
	"Jersey",
	"Jo_Daviess",
	"Johnson",
	"Kane",
	"Kankakee",
	"Kendall",
	"Knox",
	"LaSalle",
	"Lake",
	"Lawrence",
	"Lee",
	"Livingston",
	"Logan",
	"Macon",
	"Macoupin",
	"Madison",
	"Marion",
	"Marshall",
	"Mason",
	"Massac",
	"McDonough",
	"McHenry",
	"McLean",
	"Menard",
	"Mercer",
	"Monroe",
	"Montgomery",
	"Morgan",
	"Moultrie",
	"Ogle",
	"Peoria",
	"Perry",
	"Piatt",
	"Pike",
	"Pope",
	"Pulaski",
	"Putnam",
	"Randolph",
	"Richland",
	"Rock_Island",
	"Saint_Clair",
	"Saline",
	"Sangamon",
	"Schuyler",
	"Scott",
	"Shelby",
	"Stark",
	"Stephenson",
	"Tazewell",
	"Union",
	"Vermilion",
	"Wabash",
	"Warren",
	"Washington",
	"Wayne",
	"White",
	"Whiteside",
	"Will",
	"Williamson",
	"Winnebago",
	"Woodford"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
