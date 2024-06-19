/**
 * Find state ids while the SVg is open.
 * 
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

let stateName = 'Connecticut';
let srcFilePath = `img/Map_of_${stateName}.svg`;
let destFileTemplate = (id)=>`Map_of_${stateName}_highlighting_${id}_County.svg`;

const counties = [
	"Fairfield",
	"Hartford",
	"Litchfield",
	"Middlesex",
	"New_Haven",
	"New_London",
	"Tolland",
	"Windham"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
