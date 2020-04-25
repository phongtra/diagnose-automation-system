
// Let's make this thing.

// Server (proxy) to get the information from.
var hostname = "localhost:3000";

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

var function get_from_symptoms(info) {
	
	var gender = info.gender;
	var birthYear = info.birthYear;
	var symptoms = info.symptoms;
	
	try {
		// Request code goes here.
		var result = dum;
	
	} catch(error) {
		console.log(error);
		return 500;
	}
	
	update_ui(dum);
	
	return 200;
};