
let stateName = 'Oklahoma';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Adair', 'Alfalfa', 'Atoka', 'Beaver', 'Beckham', 'Blaine', 'Bryan', 'Caddo', 'Canadian', 'Carter', 'Cherokee', 'Choctaw', 'Cimarron', 'Cleveland', 'Coal', 'Comanche', 'Cotton', 'Craig', 'Creek', 'Custer', 'Delaware', 'Dewey', 'Ellis', 'Garfield', 'Garvin', 'Grady', 'Grant', 'Greer', 'Harmon', 'Harper', 'Haskell', 'Hughes', 'Jackson', 'Jefferson', 'Johnston', 'Kay', 'Kingfisher', 'Kiowa', 'Latimer', 'Le_Flore', 'Lincoln', 'Logan', 'Love', 'Major', 'Marshall', 'Mayes', 'McClain', 'McCurtain', 'McIntosh', 'Murray', 'Muskogee', 'Noble', 'Nowata', 'Okfuskee', 'Oklahoma', 'Okmulgee', 'Osage', 'Ottawa', 'Pawnee', 'Payne', 'Pittsburg', 'Pontotoc', 'Pottawatomie', 'Pushmataha', 'Roger_Mills', 'Rogers', 'Seminole', 'Sequoyah', 'Stephens', 'Texas', 'Tillman', 'Tulsa', 'Wagoner', 'Washington', 'Washita', 'Woods', 'Woodward'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
