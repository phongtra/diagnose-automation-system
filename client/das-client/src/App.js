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

function Submit({ index }) {
  return (
    <div
      className="submit"
      //get_from_symptoms(age)
    >
      <button onClick>Submit</button>
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
        className="symptom"
        placeholder = "Add another symptom"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
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

  const [age, setAge] = useState("");

  return (
    
    <div className="app">
      <input
        type="text"
        className="input"
        placeholder = "Input your age"
        value={age}
        onChange={e => { console.log(e.target.value); setAge(e.target.value)}}
      />
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
        
        <Submit/>
      </div>
    </div>
  );
}

//Things I NEED to do:
//finish button (say like submit)
//printing out new data from Bill
//original buttons navigating to co-vid + this page
//Age + gender

export default App;