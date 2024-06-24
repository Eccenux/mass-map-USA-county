
let stateName = 'Kansas';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ['Allen', 'Anderson', 'Atchison', 'Barber', 'Barton', 'Bourbon', 'Brown', 'Butler', 'Chase', 'Chautauqua', 'Cherokee', 'Cheyenne', 'Clark', 'Clay', 'Cloud', 'Coffey', 'Comanche', 'Cowley', 'Crawford', 'Decatur', 'Dickinson', 'Doniphan', 'Douglas', 'Edwards', 'Elk', 'Ellis', 'Ellsworth', 'Finney', 'Ford', 'Franklin', 'Geary', 'Gove', 'Graham', 'Grant', 'Gray', 'Greeley', 'Greenwood', 'Hamilton', 'Harper', 'Harvey', 'Haskell', 'Hodgeman', 'Jackson', 'Jefferson', 'Jewell', 'Johnson', 'Kearny', 'Kingman', 'Kiowa', 'Labette', 'Lane', 'Leavenworth', 'Lincoln', 'Linn', 'Logan', 'Lyon', 'Marion', 'Marshall', 'McPherson', 'Meade', 'Miami', 'Mitchell', 'Montgomery', 'Morris', 'Morton', 'Nemaha', 'Neosho', 'Ness', 'Norton', 'Osage', 'Osborne', 'Ottawa', 'Pawnee', 'Phillips', 'Pottawatomie', 'Pratt', 'Rawlins', 'Reno', 'Republic', 'Rice', 'Riley', 'Rooks', 'Rush', 'Russell', 'Saline', 'Scott', 'Sedgwick', 'Seward', 'Shawnee', 'Sheridan', 'Sherman', 'Smith', 'Stafford', 'Stanton', 'Stevens', 'Sumner', 'Thomas', 'Trego', 'Wabaunsee', 'Wallace', 'Washington', 'Wichita', 'Wilson', 'Woodson', 'Wyandotte'];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
