
let stateName = 'Idaho';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Ada","Adams","Bannock","Bear_Lake","Benewah","Bingham","Blaine","Boise","Bonner","Bonneville","Boundary","Butte","Camas","Canyon","Caribou","Cassia","Clark","Clearwater","Custer","Elmore","Franklin","Fremont","Gem","Gooding","Idaho","Jefferson","Jerome","Kootenai","Latah","Lemhi","Lewis","Lincoln","Madison","Minidoka","Nez_Perce","Oneida","Owyhee","Payette","Power","Shoshone","Teton","Twin_Falls","Valley","Washington"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
