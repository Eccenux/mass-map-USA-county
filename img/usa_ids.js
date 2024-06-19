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

let stateName = 'Hawaii';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Hawaii",
	"Honolulu",
	"Kalawao",
	"Kauai",
	"Maui"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
