import React, {useState} from 'react';
import './App.css';


const Symptom = ({symptom}) => <div className ="symptom">{symptom.text}</div>

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
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function App() {
  const[symptoms, continualSymptoms] = useState([
    {text: "Symptom: Bloating"},
    {text: "Symptom: Cough"},
    {text: "Symptom: Diarrhea"},
    {text: "Symptom: Dizziness"},
    {text: "Symptom: Fatigue"},
    {text: "Symptom: Fever"},
    {text: "Symptom: Headache"},
    {text: "Symptom: Muscle Cramp"},
    {text: "Symptom: Nausea"},
    {text: "Symptom: Throat Irritation"},
    {text: "Symptom: Other"},
  ])   

  const addSymptom = text => {
    const newSymptoms = [...symptoms, { text }];
    continualSymptoms(newSymptoms);
  };

  return (
    <div className = "app">
      <div className = "symptoms-list">
        {symptoms.map((symptom, index) => (
          <Symptom
            key = {index}
            index = {index}
            symptom = {symptom}
          />
        ))}
      </div>
    </div>
  )
  
}

export default App;
