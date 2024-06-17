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

// template used for most areas
let destFileTemplate = (id)=>`Map_of_Alaska_highlighting_${id}_Census_Area.svg`;

// First group is "Census Area" (tpl above)
// Most other are "Borough", "City and Borough".
const counties = [
	// "Aleutians West",
	// "Bethel",
	// "Dillingham",
	// "Nome",
	// "Prince of Wales-Outer Ketchikan",
	// "Skagway-Hoonah-Angoon",
	// "Southeast Fairbanks",
	// "Valdez-Cordova",
	// "Wade Hampton",
	// "Wrangell-Petersburg",
	// "Yukon-Koyukuk",

	// {id: 'Yakutat', destFileName: 'Map of Alaska highlighting Yakutat City and Borough.svg'},
	{id: 'Ketchikan Gateway', destFileName: 'Map of Alaska highlighting Ketchikan Gateway Borough.svg'},

	// {id: 'Denali', destFileName: 'Map of Alaska highlighting Denali Borough.svg'},
	// {id: 'Haines', destFileName: 'Map of Alaska highlighting Haines Borough.svg'},
	// {id: 'Matanuska-Susitna', destFileName: 'Map of Alaska highlighting Matanuska-Susitna Borough.svg'},

	// {id: 'Aleutians East', destFileName: 'Map of Alaska highlighting Aleutians East Borough.svg'},
	// {id: 'Anchorage Municipality', destFileName: 'Map of Alaska highlighting Anchorage Municipality.svg'},
	// {id: 'Bristol Bay', destFileName: 'Map of Alaska highlighting Bristol Bay Borough.svg'},
	// {id: 'Fairbanks North Star', destFileName: 'Map of Alaska highlighting Fairbanks North Star Borough.svg'},
	// {id: 'Kenai Peninsula', destFileName: 'Map of Alaska highlighting Kenai Peninsula Borough.svg'},
	// {id: 'Kodiak Island', destFileName: 'Map of Alaska highlighting Kodiak Island Borough.svg'},
	// {id: 'Lake and Peninsula', destFileName: 'Map of Alaska highlighting Lake and Peninsula Borough.svg'},
	// {id: 'North Slope', destFileName: 'Map of Alaska highlighting North Slope Borough.svg'},
	// {id: 'Northwest Arctic', destFileName: 'Map of Alaska highlighting Northwest Arctic Borough.svg'},

	// {id: 'Juneau', destFileName: 'Map of Alaska highlighting Juneau City and Borough.svg'},
	// {id: 'Sitka', destFileName: 'Map of Alaska highlighting Sitka City and Borough.svg'},
];

module.exports = {
	counties,
};
