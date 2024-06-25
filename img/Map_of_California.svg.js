
let stateName = 'California';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Alameda","Alpine","Amador","Butte","Calaveras","Colusa","Contra_Costa","Del_Norte","El_Dorado","Fresno","Glenn","Humboldt","Imperial","Inyo","Kern","Kings","Lake","Lassen","Los_Angeles","Madera","Marin","Mariposa","Mendocino","Merced","Modoc","Mono","Monterey","Napa","Nevada","Orange","Placer","Plumas","Riverside","Sacramento","San_Benito","San_Bernardino","San_Diego","San_Francisco","San_Joaquin","San_Luis_Obispo","San_Mateo","Santa_Barbara","Santa_Clara","Santa_Cruz","Shasta","Sierra","Siskiyou","Solano","Sonoma","Stanislaus","Sutter","Tehama","Trinity","Tulare","Tuolumne","Ventura","Yolo","Yuba"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
