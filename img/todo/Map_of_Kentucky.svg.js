
let stateName = 'Kentucky';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Adair', 'Allen', 'Anderson', 'Ballard', 'Barren', 'Bath', 'Bell', 'Boone', 'Bourbon', 'Boyd', 'Boyle', 'Bracken', 'Breathitt', 'Breckinridge', 'Bullitt', 'Butler', 'Caldwell', 'Calloway', 'Campbell', 'Carlisle', 'Carroll', 'Carter', 'Casey', 'Christian', 'Clark', 'Clay', 'Clinton', 'Crittenden', 'Cumberland', 'Daviess', 'Edmonson', 'Elliott', 'Estill', 'Fayette', 'Fleming', 'Floyd', 'Franklin', 'Fulton', 'Gallatin', 'Garrard', 'Grant', 'Graves', 'Grayson', 'Green', 'Greenup', 'Hancock', 'Hardin', 'Harlan', 'Harrison', 'Hart', 'Henderson', 'Henry', 'Hickman', 'Hopkins', 'Jackson', 'Jefferson', 'Jessamine', 'Johnson', 'Kenton', 'Knott', 'Knox', 'Larue', 'Laurel', 'Lawrence', 'Lee', 'Leslie', 'Letcher', 'Lewis', 'Lincoln', 'Livingston', 'Logan', 'Lyon', 'Madison', 'Magoffin', 'Marion', 'Marshall', 'Martin', 'Mason', 'McCracken', 'McCreary', 'McLean', 'Meade', 'Menifee', 'Mercer', 'Metcalfe', 'Monroe', 'Montgomery', 'Morgan', 'Muhlenberg', 'Nelson', 'Nicholas', 'Ohio', 'Oldham', 'Owen', 'Owsley', 'Pendleton', 'Perry', 'Pike', 'Powell', 'Pulaski', 'Robertson', 'Rockcastle', 'Rowan', 'Russell', 'Scott', 'Shelby', 'Simpson', 'Spencer', 'Taylor', 'Todd', 'Trigg', 'Trimble', 'Union', 'Warren', 'Washington', 'Wayne', 'Webster', 'Whitley', 'Wolfe', 'Woodford'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
