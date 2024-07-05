
let stateName = 'Virginia';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

let counties = ["Accomack","Albemarle","Alexandria","Alleghany","Amelia","Amherst","Appomattox","Arlington","Augusta","Bath","Bedford","Bedford","Bland","Botetourt","Bristol","Brunswick","Buchanan","Buckingham","Buena_Vista","Campbell","Caroline","Carroll","Charles","Charlotte","Charlottesville","Chesapeake","Chesterfield","Clarke","Colonial_Heights","Covington","Craig","Culpeper","Cumberland","Danville","Dickenson","Dinwiddie","Emporia","Essex","Fairfax","Fairfax","Falls_Church","Fauquier","Floyd","Fluvanna","Franklin","Franklin","Frederick","Fredericksburg","Galax","Giles","Gloucester","Goochland","Grayson","Greene","Greensville","Halifax","Hampton","Hanover","Harrisonburg","Henrico","Henry","Highland","Hopewell","Isle_of_Wight","James","King_George","King_William","King_and_Queen","Lancaster","Lee","Lexington","Loudoun","Louisa","Lunenburg","Lynchburg","Madison","Manassas","Manassas_Park","Martinsville","Mathews","Mecklenburg","Middlesex","Montgomery","Nelson","New_Kent","Newport_News","Norfolk","Northampton","Northumberland","Norton","Nottoway","Orange","Page","Patrick","Petersburg","Pittsylvania","Poquoson","Portsmouth","Powhatan","Prince_Edward","Prince_George","Prince_William","Pulaski","Radford","Rappahannock","Richmond","Richmond","Roanoke","Roanoke","Rockbridge","Rockingham","Russell","Salem","Scott","Shenandoah","Smyth","Southampton","Spotsylvania","Stafford","Staunton","Suffolk","Surry","Sussex","Tazewell","Virginia_Beach","Warren","Washington","Waynesboro","Westmoreland","Williamsburg","Winchester","Wise","Wythe","York"];
counties = [
	// {id: 'Augusta', destFileName: 'Map_of_Virginia_highlighting_Augusta_County.svg'},
];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
