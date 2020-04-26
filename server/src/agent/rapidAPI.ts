import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImhvYW5nX3Bob25nOThAbWUuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI2ODg3IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA0LTI1IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1ODc5MTc1ODcsIm5iZiI6MTU4NzkxMDM4N30.vk3n2tLc4YNEdB_byVAXKPFC8hTxtqPzTrOFmmB6lZQ';

const rapidAPI = axios.create({
  baseURL: 'https://sandbox-healthservice.priaid.ch/',
  headers: {
    'content-type': 'application/json',
  },
});

export default {
  async getSymptoms() {
    return await rapidAPI.get('/symptoms', {
      params: { token, format: 'json', language: 'en-gb' },
    });
  },
  async getDiagnoses(symptoms: string, gender: string, birthYear: string) {
    return await rapidAPI.get('/diagnosis', {
      params: {
        token,
        format: 'json',
        language: 'en-gb',
        symptoms,
        gender,
        year_of_birth: birthYear,
      },
    });
  },
  async getIssueInfo(id: string) {
    return await rapidAPI.get(`/issues/${id}/info`, {
      params: { token, issue_int: id, language: 'en-gb', format: 'json' },
    });
  },
};
