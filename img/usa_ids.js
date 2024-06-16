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
	copy(ids);
}

const ids = [
	"Autauga",
	"Baldwin",
	"Barbour",
	"Bibb",
	"Blount",
	"Bullock",
	"Butler",
	"Calhoun",
	"Chambers",
	"Cherokee",
	"Chilton",
	"Choctaw",
	"Clarke",
	"Clay",
	"Cleburne",
	"Coffee",
	"Colbert",
	"Conecuh",
	"Coosa",
	"Covington",
	"Crenshaw",
	"Cullman",
	"Dale",
	"Dallas",
	"DeKalb",
	"Elmore",
	"Escambia",
	"Etowah",
	"Fayette",
	"Franklin",
	"Geneva",
	"Greene",
	"Hale",
	"Henry",
	"Houston",
	"Jackson",
	"Jefferson",
	"Lamar",
	"Lauderdale",
	"Lawrence",
	"Lee",
	"Limestone",
	"Lowndes",
	"Macon",
	"Madison",
	"Marengo",
	"Marion",
	"Marshall",
	"Mobile",
	"Monroe",
	"Montgomery",
	"Morgan",
	"Perry",
	"Pickens",
	"Pike",
	"Randolph",
	"Russell",
	"Saint_Clair",
	"Shelby",
	"Sumter",
	"Talladega",
	"Tallapoosa",
	"Tuscaloosa",
	"Walker",
	"Washington",
	"Wilcox",
	"Winston"
];

module.exports = {
	county_ids,
};
