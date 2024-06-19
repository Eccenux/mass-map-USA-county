/**
 * Find state ids while the SVg is open.
 * 
 * Skips numeric ids. The rest should be counties.
 */
function findIds() {
	var ids = [...document.querySelectorAll('[id]')]
		.map(el=>el.id)
		.filter(id=>id.replace(/[0-9]+/, '').length>1)
	;
	console.log(ids.length);
	copy(ids);
}

let srcFilePath = 'img/Map_of_Arkansas.svg';
let destFileTemplate = (id)=>`Map_of_Arkansas_highlighting_${id}_County.svg`;

const counties = [
	"Arkansas",
	"Ashley",
	"Baxter",
	"Benton",
	"Boone",
	"Bradley",
	"Calhoun",
	"Carroll",
	"Chicot",
	"Clark",
	"Clay",
	"Cleburne",
	"Cleveland",
	"Columbia",
	"Conway",
	"Craighead",
	"Crawford",
	"Crittenden",
	"Cross",
	"Dallas",
	"Desha",
	"Drew",
	"Faulkner",
	"Franklin",
	"Fulton",
	"Garland",
	"Grant",
	"Greene",
	"Hempstead",
	"Hot_Spring",
	"Howard",
	"Independence",
	"Izard",
	"Jackson",
	"Jefferson",
	"Johnson",
	"Lafayette",
	"Lawrence",
	"Lee",
	"Lincoln",
	"Little_River",
	"Logan",
	"Lonoke",
	"Madison",
	"Marion",
	"Miller",
	"Mississippi",
	"Monroe",
	"Montgomery",
	"Nevada",
	"Newton",
	"Ouachita",
	"Perry",
	"Phillips",
	"Pike",
	"Poinsett",
	"Polk",
	"Pope",
	"Prairie",
	"Pulaski",
	"Randolph",
	"Saint_Francis",
	"Saline",
	"Scott",
	"Searcy",
	"Sebastian",
	"Sevier",
	"Sharp",
	"Stone",
	"Union",
	"Van_Buren",
	"Washington",
	"White",
	"Woodruff",
	"Yell"
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
