
let stateName = 'Mississippi';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Adams', 'Alcorn', 'Amite', 'Attala', 'Benton', 'Bolivar', 'Calhoun', 'Carroll', 'Chickasaw', 'Choctaw', 'Claiborne', 'Clarke', 'Clay', 'Coahoma', 'Copiah', 'Covington', 'DeSoto', 'Forrest', 'Franklin', 'George', 'Greene', 'Grenada', 'Hancock', 'Harrison', 'Hinds', 'Holmes', 'Humphreys', 'Issaquena', 'Itawamba', 'Jackson', 'Jasper', 'Jefferson', 'Jefferson_Davis', 'Jones', 'Kemper', 'Lafayette', 'Lamar', 'Lauderdale', 'Lawrence', 'Leake', 'Lee', 'Leflore', 'Lincoln', 'Lowndes', 'Madison', 'Marion', 'Marshall', 'Monroe', 'Montgomery', 'Neshoba', 'Newton', 'Noxubee', 'Oktibbeha', 'Panola', 'Pearl_River', 'Perry', 'Pike', 'Pontotoc', 'Prentiss', 'Quitman', 'Rankin', 'Scott', 'Sharkey', 'Simpson', 'Smith', 'Stone', 'Sunflower', 'Tallahatchie', 'Tate', 'Tippah', 'Tishomingo', 'Tunica', 'Union', 'Walthall', 'Warren', 'Washington', 'Wayne', 'Webster', 'Wilkinson', 'Winston', 'Yalobusha', 'Yazoo'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
