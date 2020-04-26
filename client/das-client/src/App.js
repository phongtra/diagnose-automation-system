import React, { useState } from "react";
import "./App.css"


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
  const [age, setAge] = useState("");
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
    
    <div className="app">
      <input
        type="text"
        className="input"
        placeholder = "Enter your age"
        value={age}
        onChange={e => {setAge(e.target.value)}}
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
          <button onClick={() => console.log(age, gender) /*get_from_symptom(age, gender)*/}>Submit</button>
        </div>
      </div>
    </div>
  );
}

//Things I NEED to do:
//Array - symptoms with isCompleted = true (could be done with a for for every element in the array)
//Button for co-vid 19; redirects to inframedical
//Take in information from Bill and display it

export default App;