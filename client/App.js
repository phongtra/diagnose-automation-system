import React from 'react';
import './App.css';

function App() {
  const[symptoms, continualSymptoms] = React.useState([
    {text: "Symptom: Dizziness"},
    {text: "Symptom: Nausea"},
    {text: "Symptom: Headache"},
  ])   
  const Symptom = ({symptom}) => <div className ="symptom">{symptom.text}</div>
}

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

export default App;
