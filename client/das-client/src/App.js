import React, { useState } from "react";
import "./App.css";
import "./caller";

function Symptom({ symptom, index, completeSymptom, removeSymptom }) {
  return (
    <div
      className="symptom"
      style={{ textDecoration: symptom.isCompleted ? "underline" : "" }}
    >
      {symptom.text}

      <div>
        <button onClick={() => completeSymptom(index)}>Yes</button>
        <button onClick={() => removeSymptom(index)}>No</button>
      </div>
    </div>
  );
}

function SymptomForm({ addSymptom }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addSymptom(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        className="input"
        placeholder = "Add another symptom"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

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

function get_from_symptoms(info) {
	
	var gender = info.gender;
	var birthYear = info.birthYear;
	var symptoms = info.symptoms;
	
	for (var i = 0; i < symptoms.length; i++) {
		symptoms[i] = symptoms[i];
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

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");

  const [symptoms, setSymptoms] = useState([
    {
      text: "bloating",
      isCompleted: false,
    },
    {
      text: "cough",
      isCompleted: false,
    },
    {
      text: "diarrhea",
      isCompleted: false,
    },
    {
      text: "dizziness",
      isCompleted: false,
    },
    {
      text: "fatigue",
      isCompleted: false,
    },
    {
      text: "fever",
      isCompleted: false,
    },
    {
      text: "headache",
      isCompleted: false,
    },
    {
      text: "nausea",
      isCompleted: false,
    },
    {
      text: "throat irritation",
      isCompleted: false,
    },
  ]); 

  const addSymptom = text => {
    const newSymptoms = [...symptoms, { text }];
    setSymptoms(newSymptoms);
  };

  const completeSymptom = index => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].isCompleted = true;
    setSymptoms(newSymptoms);
  };

  const removeSymptom = index => {
    const newSymptoms = [...symptoms];
    newSymptoms[index].isCompleted = false;
    setSymptoms(newSymptoms);
  };


  return (
    
    <div className = "app">
      <input
        type="number"
        className="input"
        placeholder = "Enter your birth year"
        value={birthYear}
        onChange={e => {setBirthYear(e.target.value)}}
      />
      <select id = "gender" value = {gender} onChange={e => {setGender(e.target.value)}}> 
        <option value = "not chosen">Choose your gender</option>
        <option value = "male">Male</option>
        <option value = "female">Female</option>
      </select>
      <div className="symptom-list">
        {symptoms.map((symptom, index) => (
          <Symptom
            key={index}
            index={index}
            symptom={symptom}
            completeSymptom={completeSymptom}

            removeSymptom={removeSymptom}
          />
        ))}

        <SymptomForm addSymptom={addSymptom} />
        
        <div className="submit">
          <button onClick={() => {
            symptoms.filter(curr => curr.isCompleted).map(curr => curr.text);
            get_from_symptoms({gender, birthYear, symptoms});
          }
          }>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;