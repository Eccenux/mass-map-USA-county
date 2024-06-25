
let stateName = 'Utah';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Beaver","Box_Elder","Cache","Carbon","Daggett","Davis","Duchesne","Emery","Garfield","Grand","Iron","Juab","Kane","Millard","Morgan","Piute","Rich","Salt_Lake","San_Juan","Sanpete","Sevier","Summit","Tooele","Uintah","Utah","Wasatch","Washington","Wayne","Weber"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
