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
		return (Number.parseFloat(x) / d).toFixed(2);
	}
	width=resize(width);
	height=resize(height);
	console.log(`width="${width}" height="${height}"`)
}

let stateName = 'North_Dakota';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Adams",
	"Barnes",
	"Benson",
	"Billings",
	"Bottineau",
	"Bowman",
	"Burke",
	"Burleigh",
	"Cass",
	"Cavalier",
	"Dickey",
	"Divide",
	"Dunn",
	"Eddy",
	"Emmons",
	"Foster",
	"Golden_Valley",
	"Grand_Forks",
	"Grant",
	"Griggs",
	"Hettinger",
	"Kidder",
	"LaMoure",
	"Logan",
	"McHenry",
	"McIntosh",
	"McKenzie",
	"McLean",
	"Mercer",
	"Morton",
	"Mountrail",
	"Nelson",
	"Oliver",
	"Pembina",
	"Pierce",
	"Ramsey",
	"Ransom",
	"Renville",
	"Richland",
	"Rolette",
	"Sargent",
	"Sheridan",
	"Sioux",
	"Slope",
	"Stark",
	"Steele",
	"Stutsman",
	"Towner",
	"Traill",
	"Walsh",
	"Ward",
	"Wells",
	"Williams"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
