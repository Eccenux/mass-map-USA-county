
let stateName = 'Washington';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Adams","Asotin","Benton","Chelan","Clallam","Clark","Columbia","Cowlitz","Douglas","Ferry","Franklin","Garfield","Grant","Grays_Harbor","Island","Jefferson","King","Kitsap","Kittitas","Klickitat","Lewis","Lincoln","Mason","Okanogan","Pacific","Pend_Oreille","Pierce","San_Juan","Skagit","Skamania","Snohomish","Spokane","Stevens","Thurston","Wahkiakum","Walla_Walla","Whatcom","Whitman","Yakima"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
