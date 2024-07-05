
let stateName = 'Virginia';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

let counties = [
	{id: 'Alexandria', destFileName: 'Map of Virginia highlighting Alexandria and Arlington.svg'},
	{id: 'Charles', destFileName: 'Map of Virginia highlighting Charles City County.svg'},
	{id: 'James', destFileName: 'Map of Virginia highlighting James City County.svg'},
	"Accomack","Albemarle","Alleghany","Amelia","Amherst","Appomattox","Arlington","Augusta",
	"Bath","Bedford","Bedford","Bland","Botetourt","Brunswick","Buchanan","Buckingham","Buena_Vista",
	"Campbell","Caroline","Carroll","Charlotte","Charlottesville","Chesapeake","Chesterfield","Clarke","Colonial_Heights","Covington","Craig","Culpeper","Cumberland",
	"Danville","Dickenson","Dinwiddie","Emporia","Essex","Fairfax","Fairfax","Falls_Church","Fauquier","Floyd","Fluvanna","Franklin","Franklin","Frederick",
	"Galax","Giles","Gloucester","Goochland","Grayson","Greene","Greensville","Halifax","Hampton","Hanover","Harrisonburg","Henrico","Henry","Highland","Hopewell","Isle_of_Wight",
	"King_George","King_William","King_and_Queen","Lancaster","Lee","Lexington","Loudoun","Louisa","Lunenburg","Lynchburg",
	"Madison","Manassas","Manassas_Park","Martinsville","Mathews","Mecklenburg","Middlesex","Montgomery",
	"Nelson","New_Kent","Newport_News","Norfolk","Northampton","Northumberland","Norton","Nottoway","Orange",
	"Page","Patrick","Petersburg","Pittsylvania","Poquoson","Portsmouth","Powhatan","Prince_Edward","Prince_George","Prince_William","Pulaski",
	"Radford","Rappahannock","Richmond","Richmond","Roanoke","Roanoke","Rockbridge","Rockingham","Russell",
	"Salem","Scott","Shenandoah","Smyth","Southampton","Spotsylvania","Stafford","Staunton","Suffolk","Surry","Sussex","Tazewell","Virginia_Beach",
	"Warren","Washington","Waynesboro","Westmoreland","Williamsburg","Winchester","Wise","Wythe","York"
];

// all just cities?
var missing = [
	"Bristol","Buena_Vista","Charlottesville","Chesapeake","Colonial_Heights","Covington","Danville","Emporia","Falls_Church","Galax","Hampton","Harrisonburg","Hopewell",
	"Lexington","Lynchburg","Manassas","Manassas_Park","Martinsville","Newport_News","Norfolk","Norton","Petersburg","Poquoson","Portsmouth","Radford",
	"Salem","Staunton","Suffolk","Virginia_Beach","Waynesboro","Williamsburg","Winchester"
];
// filter out missing
counties = counties.filter(id => typeof id!=='string' || !missing.includes(id))

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
