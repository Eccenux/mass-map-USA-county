
let stateName = 'Alaska';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Aleutians_East","Anchorage_Municipality","Bethel","Bristol_Bay","Denali","Dillingham","Fairbanks_North_Star","Haines","Juneau","Kenai_Peninsula","Kodiak_Island","Lake_and_Peninsula","Matanuska-Susitna","Nome","North_Slope","Northwest_Arctic","Prince_of_Wales-Outer_Ketchikan","Sitka","Skagway-Hoonah-Angoon","Southeast_Fairbanks","Valdez-Cordova","Wade_Hampton","Wrangell-Petersburg","Yakutat","Yukon-Koyukuk"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
