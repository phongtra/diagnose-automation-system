import axios from 'axios';

const Key =
  'b8c1e15a354c62986e618dcfcbd0c72b';
  
const Id =
  'e9475a35';
const infermAPI = axios.create({
  baseURL: 'https://api.infermedica.com/covid19/',
  headers: {
    'content-type': 'application/json',
  },
});

export default {
  async getDiagnosisFromInfermedica(symptoms: Any, gender: string, age: Any) {                                
    return await infermAPI.post('/diagnosis', {
      data: { 
	    App-Key: Key, 
		App-Id: Id, 
		evidence: symptoms, 
		sex: gender, 
		age
	  }
    });
  },
  async getTriageFromInfermedica(symptoms: Any, gender: string, age: Any) {
    return await infermAPI.post('/triage', {
      data: {
        App-Key: Key,
		App-Id: Id,
        evidence: symptoms,
        sex: gender,
        age
      }
    });
  }
};