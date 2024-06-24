
let stateName = 'Wisconsin';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Adams","Ashland","Barron","Bayfield","Brown","Buffalo","Burnett","Calumet","Chippewa","Clark","Columbia","Crawford","Dane","Dodge","Door","Douglas","Dunn","Eau_Claire","Florence","Fond_du_Lac","Forest","Grant","Green","Green_Lake","Iowa","Iron","Jackson","Jefferson","Juneau","Kenosha","Kewaunee","La_Crosse","Lafayette","Langlade","Lincoln","Manitowoc","Marathon","Marinette","Marquette","Menominee","Milwaukee","Monroe","Oconto","Oneida","Outagamie","Ozaukee","Pepin","Pierce","Polk","Portage","Price","Racine","Richland","Rock","Rusk","Saint_Croix","Sauk","Sawyer","Shawano","Sheboygan","Taylor","Trempealeau","Vernon","Vilas","Walworth","Washburn","Washington","Waukesha","Waupaca","Waushara","Winnebago","Wood"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
