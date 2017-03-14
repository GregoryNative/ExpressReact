import axios from 'axios';

const API_BASE = 'http://localhost:9000/api';

export function getQuestions(location) {
  let URL = `${API_BASE}/question`;
  if (location) URL += location;

  return axios.get(URL)
    .then(response => response.data);
}

export function getAnswers(id) {
  const URL = `${API_BASE}/question/${id}`;

  return axios.get(URL)
    .then(response => response.data);
}

export function addQuestion(params) {
  const URL = `${API_BASE}/question`;

  return axios.post(URL, params);
}

export function addAnswer(params) {
  const URL = `${API_BASE}/answer`;

  return axios.post(URL, {
    questionId: params.id,
    username: params.username,
    text: params.text,
  })
    .then(response => response.data);
}

export default {
  addAnswer,
  addQuestion,
  getQuestions,
  getAnswers,
};
