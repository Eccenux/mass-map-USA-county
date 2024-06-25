
let stateName = 'Colorado';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Adams","Alamosa","Arapahoe","Archuleta","Baca","Bent","Boulder","Broomfield","Chaffee","Cheyenne","Clear_Creek","Conejos","Costilla","Crowley","Custer","Delta","Denver","Dolores","Douglas","Eagle","El_Paso","Elbert","Fremont","Garfield","Gilpin","Grand","Gunnison","Hinsdale","Huerfano","Jackson","Jefferson","Kiowa","Kit_Carson","La_Plata","Lake","Larimer","Las_Animas","Lincoln","Logan","Mesa","Mineral","Moffat","Montezuma","Montrose","Morgan","Otero","Ouray","Park","Phillips","Pitkin","Prowers","Pueblo","Rio_Blanco","Rio_Grande","Routt","Saguache","San_Juan","San_Miguel","Sedgwick","Summit","Teller","Washington","Weld","Yuma"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
