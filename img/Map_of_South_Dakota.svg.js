
let stateName = 'South_Dakota';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Aurora","Beadle","Bennett","Bon_Homme","Brookings","Brown","Brule","Buffalo","Butte","Campbell","Charles_Mix","Clark","Clay","Codington","Corson","Custer","Davison","Day","Deuel","Dewey","Douglas","Edmunds","Fall_River","Faulk","Grant","Gregory","Haakon","Hamlin","Hand","Hanson","Harding","Hughes","Hutchinson","Hyde","Jackson","Jerauld","Jones","Kingsbury","Lake","Lawrence","Lincoln","Lyman","Marshall","McCook","McPherson","Meade","Mellette","Miner","Minnehaha","Moody","Pennington","Perkins","Potter","Roberts","Sanborn","Shannon","Spink","Stanley","Sully","Todd","Tripp","Turner","Union","Walworth","Yankton","Ziebach"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
