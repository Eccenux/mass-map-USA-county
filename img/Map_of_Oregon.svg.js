
let stateName = 'Oregon';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Baker","Benton","Clackamas","Clatsop","Columbia","Coos","Crook","Curry","Deschutes","Douglas","Gilliam","Grant","Harney","Hood_River","Jackson","Jefferson","Josephine","Klamath","Lake","Lane","Lincoln","Linn","Malheur","Marion","Morrow","Multnomah","Polk","Sherman","Tillamook","Umatilla","Union","Wallowa","Wasco","Washington","Wheeler","Yamhill"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
