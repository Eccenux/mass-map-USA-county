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

let stateName = 'Indiana';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Adams",
	"Allen",
	"Bartholomew",
	"Benton",
	"Blackford",
	"Boone",
	"Brown",
	"Carroll",
	"Cass",
	"Clark",
	"Clay",
	"Clinton",
	"Crawford",
	"Daviess",
	"DeKalb",
	"Dearborn",
	"Decatur",
	"Delaware",
	"Dubois",
	"Elkhart",
	"Fayette",
	"Floyd",
	"Fountain",
	"Franklin",
	"Fulton",
	"Gibson",
	"Grant",
	"Greene",
	"Hamilton",
	"Hancock",
	"Harrison",
	"Hendricks",
	"Henry",
	"Howard",
	"Huntington",
	"Jackson",
	"Jasper",
	"Jay",
	"Jefferson",
	"Jennings",
	"Johnson",
	"Knox",
	"Kosciusko",
	"LaGrange",
	"LaPorte",
	"Lake",
	"Lawrence",
	"Madison",
	"Marion",
	"Marshall",
	"Martin",
	"Miami",
	"Monroe",
	"Montgomery",
	"Morgan",
	"Newton",
	"Noble",
	"Ohio",
	"Orange",
	"Owen",
	"Parke",
	"Perry",
	"Pike",
	"Porter",
	"Posey",
	"Pulaski",
	"Putnam",
	"Randolph",
	"Ripley",
	"Rush",
	"Saint_Joseph",
	"Scott",
	"Shelby",
	"Spencer",
	"Starke",
	"Steuben",
	"Sullivan",
	"Switzerland",
	"Tippecanoe",
	"Tipton",
	"Union",
	"Vanderburgh",
	"Vermillion",
	"Vigo",
	"Wabash",
	"Warren",
	"Warrick",
	"Washington",
	"Wayne",
	"Wells",
	"White",
	"Whitley"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
