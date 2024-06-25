
let stateName = 'Michigan';
let srcFilePath = 'img/Map_of_' + stateName + '.svg';
let destFileTemplate = (id) => 'Map_of_' + stateName + '_highlighting_' + id + '_County.svg';

const counties = ["Alcona","Alger","Allegan","Alpena","Antrim","Arenac","Baraga","Barry","Bay","Benzie","Berrien","Branch","Calhoun","Cass","Charlevoix","Cheboygan","Chippewa","Clare","Clinton","Crawford","Delta","Dickinson","Eaton","Emmet","Genesee","Gladwin","Gogebic","Grand_Traverse","Gratiot","Hillsdale","Houghton","Huron","Ingham","Ionia","Iosco","Iron","Isabella","Jackson","Kalamazoo","Kalkaska","Kent","Keweenaw","Lake","Lapeer","Leelanau","Lenawee","Livingston","Luce","Mackinac","Macomb","Manistee","Marquette","Mason","Mecosta","Menominee","Midland","Missaukee","Monroe","Montcalm","Montmorency","Muskegon","Newaygo","Oakland","Oceana","Ogemaw","Ontonagon","Osceola","Oscoda","Otsego","Ottawa","Presque_Isle","Roscommon","Saginaw","Saint_Clair","Saint_Joseph","Sanilac","Schoolcraft","Shiawassee","Tuscola","Van_Buren","Washtenaw","Wayne","Wexford"];

module.exports = {
	counties,
	srcFilePath,
	destFileTemplate,
};
