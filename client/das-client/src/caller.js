
// Let's make this thing.

// Server (proxy) to get the information from.
var hostname = "http://localhost:3000/";

// Dummy variable for calling the UI function.
var dum = {
	
	overview: `A coronavirus is a kind of common virus that causes an infection in your nose, sinuses, or upper throat. Most coronaviruses aren't dangerous.

		COVID-19 is a disease that can cause what doctors call a respiratory tract infection. It can affect your upper respiratory tract (sinuses, nose, and throat) or lower respiratory tract (windpipe and lungs). It's caused by a coronavirus named SARS-CoV-2.

		It spreads the same way other coronaviruses do, mainly through person-to-person contact. Infections range from mild to serious.

		SARS-CoV-2 is one of seven types of coronavirus, including the ones that cause severe diseases like Middle East respiratory syndrome (MERS) and sudden acute respiratory syndrome (SARS). The other coronaviruses cause most of the colds that affect us during the year but aren’t a serious threat for otherwise healthy people.

		In early 2020, after a December 2019 outbreak in China, the World Health Organization identified SARS-CoV-2 as a new type of coronavirus. The outbreak quickly spread around the world.`,
		
	symptoms: [
		"Fever",
		"Dry cough",
		"Fatigue"
	],
	
	treatment: [
		"If you don't feel well, stay nome.",
		"Call the doctor if you have a fever, cough, and trouble breathing.",
		"Follow your doctor's advice and keep up with the news on COVID-19."
	],
	
	notes: `For the latest updates on the 2020 coronavirus outbreak, see our news coverage.`
};

var hostname = "http://localhost:3000/";

var symptoms = [];
var allSymptoms = require('./Symptomlist.json');
var allSymptomNames = [];

var httpReq = new XMLHttpRequest();
const url = hostname + "symptoms";

httpReq.open("GET", url);
httpReq.send();

httpReq.onreadystatechange = (e) => {
	if (httpReq.readyState != 4 || httpReq.status != 200) {
		return;
	}
	allSymptoms = JSON.parse(httpReq.responseText);
	
	for (var i = 0; i < allSymptoms.length; i++) {
		allSymptoms[i].Name = allSymptoms[i].Name.toLowerCase();
	}
	
// 	obj = {
	
// 		gender: "male",
// 		birthYear: 1998,
// 		symptoms: [
// 			"anxiety",
// 			"back pain"
// 		]

// 	};

// 	get_from_symptoms(obj);
// 
}

export default function get_from_symptoms(info) {
	
	var gender = info.gender.toLowerCase();
	var birthYear = info.birthYear;
	var symptoms = info.symptoms;
	
	for (var i = 0; i < symptoms.length; i++) {
		symptoms[i] = symptoms[i].toLowerCase();
	}
	
	var symptomIDs = [];
	for (var i = 0; i < allSymptoms.length; i++) {
		if (symptoms.includes(allSymptoms[i].Name)) {
			symptomIDs.push(allSymptoms[i].ID);
		}
	}
	
	var res;
	
	try {
		// Request code goes here.
		var url = hostname + `diagnosis?symptoms=${JSON.stringify(symptomIDs)}&gender=${gender}&birthYear=${birthYear}`;
		url = encodeURI(url).replace(",", "%2C");
		
		console.log(url);
		
		httpReq = new XMLHttpRequest();
		httpReq.open("GET", url);
		httpReq.send();
		
		httpReq.onreadystatechange = (e) => {
			if (httpReq.readyState != 4 || httpReq.status != 200) {
				return;
			}
			
			res = JSON.parse(httpReq.responseText);
			console.log(res);
			
			// Send it to the UI.
		}
	
	} catch(error) {
		console.log(error);
		return 500;
	}
	
	return 200;
};