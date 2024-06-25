// done ✅
let missing = [
	{id: 'Saint_Louis_City', 		destFileName: 'Map of Missouri highlighting Saint Louis City.svg'},
	{id: 'Saint_Charles', 	 		destFileName: 'Map of Missouri highlighting St. Charles County.svg'},
	{id: 'Sainte_Genevieve', 		destFileName: 'Map of Missouri highlighting Ste. Genevieve County.svg'},

	{id: 'Larue', 					destFileName: 'Map of Kentucky highlighting LaRue County.svg'},

	{id: 'Saint_Clair',             destFileName: 'Map of Michigan highlighting St. Clair County.svg'}
]
// extra mapping for 3 states (non-standard names)
let extraMapping = {
	"./img/Map_of_Missouri.svg.js": [
		{id: 'Saint_Louis_City', 		destFileName: 'Map of Missouri highlighting Saint Louis City.svg'},
		{id: 'Saint_Charles', 	 		destFileName: 'Map of Missouri highlighting St. Charles County.svg'},
		{id: 'Sainte_Genevieve', 		destFileName: 'Map of Missouri highlighting Ste. Genevieve County.svg'},
	],
	"./img/Map_of_Kentucky.svg.js": [
		{id: 'Larue', 					destFileName: 'Map of Kentucky highlighting LaRue County.svg'},
	],
	"./img/Map_of_Michigan.svg.js": [
		{id: 'Saint_Clair',             destFileName: 'Map of Michigan highlighting St. Clair County.svg'}
	],
};

/*
False-Error (error, but OK):
{id: '✅Itawamba',               destFileName: 'Map_of_Mississippi_highlighting_Itawamba_County.svg'}
{id: '✅Lawrence',               destFileName: 'Map_of_Mississippi_highlighting_Lawrence_County.svg'}
{id: '✅Tippah',                 destFileName: 'Map_of_Mississippi_highlighting_Tippah_County.svg'}
{id: '✅Defiance', 				destFileName: 'Map_of_Ohio_highlighting_Defiance_County.svg'}
{id: '✅Boyd', 					destFileName: 'Map_of_Nebraska_highlighting_Boyd_County.svg'}

Uploaded: 953; missing: 1; other: 8
Uploaded: 244; missing: 0; other: 1
*/
