
let stateName = 'Montana';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Beaverhead', 'Big_Horn', 'Blaine', 'Broadwater', 'Carbon', 'Carter', 'Cascade', 'Chouteau', 'Custer', 'Daniels', 'Dawson', 'Deer_Lodge', 'Fallon', 'Fergus', 'Flathead', 'Gallatin', 'Garfield', 'Glacier', 'Golden_Valley', 'Granite', 'Hill', 'Jefferson', 'Judith_Basin', 'Lake', 'Lewis_and_Clark', 'Liberty', 'Lincoln', 'Madison', 'McCone', 'Meagher', 'Mineral', 'Missoula', 'Musselshell', 'Park', 'Petroleum', 'Phillips', 'Pondera', 'Powder_River', 'Powell', 'Prairie', 'Ravalli', 'Richland', 'Roosevelt', 'Rosebud', 'Sanders', 'Sheridan', 'Silver_Bow', 'Stillwater', 'Sweet_Grass', 'Teton', 'Toole', 'Treasure', 'Valley', 'Wheatland', 'Wibaux', 'Yellowstone'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
