
let stateName = 'West_Virginia';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Barbour', 'Berkeley', 'Boone', 'Braxton', 'Brooke', 'Cabell', 'Calhoun', 'Clay', 'Doddridge', 'Fayette', 'Gilmer', 'Grant', 'Greenbrier', 'Hampshire', 'Hancock', 'Hardy', 'Harrison', 'Jackson', 'Jefferson', 'Kanawha', 'Lewis', 'Lincoln', 'Logan', 'Marion', 'Marshall', 'Mason', 'McDowell', 'Mercer', 'Mineral', 'Mingo', 'Monongalia', 'Monroe', 'Morgan', 'Nicholas', 'Ohio', 'Pendleton', 'Pleasants', 'Pocahontas', 'Preston', 'Putnam', 'Raleigh', 'Randolph', 'Ritchie', 'Roane', 'Summers', 'Taylor', 'Tucker', 'Tyler', 'Upshur', 'Wayne', 'Webster', 'Wetzel', 'Wirt', 'Wood', 'Wyoming'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
