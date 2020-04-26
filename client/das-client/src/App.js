import React, { useState } from "react";
import "./App.css"
import get_from_symptoms from "../../caller"

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

function App() {
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");

  const [symptoms, setSymptoms] = useState([
    {
      text: "Bloating",
      isCompleted: false,
    },
    {
      text: "Cough",
      isCompleted: false,
    },
    {
      text: "Diarrhea",
      isCompleted: false,
    },
    {
      text: "Dizziness",
      isCompleted: false,
    },
    {
      text: "Fatigue",
      isCompleted: false,
    },
    {
      text: "Fever",
      isCompleted: false,
    },
    {
      text: "Headache",
      isCompleted: false,
    },
    {
      text: "Nausea",
      isCompleted: false,
    },
    {
      text: "Throat Irritation",
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
        <option value = "Not Chosen">Choose your gender</option>
        <option value = "Male">Male</option>
        <option value = "Female">Female</option>
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
            var mySymptoms = symptoms.filter(curr => curr.isCompleted).map(curr => curr.text);
            get_from_symptoms(birthYear, gender, mySymptoms)
          }
          }>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;