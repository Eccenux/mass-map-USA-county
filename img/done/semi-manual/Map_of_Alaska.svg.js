
let stateName = 'Alaska';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

//"Map of Alaska highlighting Skagway City and Borough.svg", // arrow (small)

let mappingTemplate = (id, group)=>`Map_of_Alaska_highlighting_${id}_${group}.svg`;
let mapping = {
	"Borough": [
		"Ketchikan_Gateway",//
		"Kodiak_Island",//
		"Matanuska-Susitna",//
		"Northwest_Arctic",//
		"Kenai_Peninsula",//
		"Lake_and_Peninsula",//
		"Fairbanks_North_Star",//
		"Haines",//
		"Denali",//
		"North_Slope",//
		"Aleutians_East",//
		"Bristol_Bay",//
	],
	"City_and_Borough": [
		"Yakutat",//
		"Juneau",//
		"Wrangell",//
		"Sitka",//
	],
	"Census_Area": [
		"Petersburg",//
		"Kusilvak",//
		"Chugach",//
		"Dillingham",//
		"Bethel",//
		"Southeast_Fairbanks",//
		"Aleutians_West",//
		"Copper_River",//
		"Hoonah-Angoon",//
		"Yukon-Koyukuk",//
		"Valdez-Cordova",//
		"Skagway-Hoonah-Angoon",//
		"Prince_of_Wales-Hyder",//
		"Prince_of_Wales-Outer_Ketchikan",//
		"Nome",//
		"Wrangell-Petersburg",//
	],
};

let counties = [
	{id: 'Anchorage_Municipality', destFileName: 'Map_of_Alaska_highlighting_Anchorage_Municipality.svg'},//
];

for (const group in mapping) {
	if (Object.hasOwnProperty.call(mapping, group)) {
		const ids = mapping[group];
		for (const id of ids) {
			let destFileName = mappingTemplate (id, group);
			counties.push({id, destFileName});
		}
	}
}
// console.log(counties);

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
