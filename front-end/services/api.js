import axios from 'axios';

export const submitSolution = async (code) => {
  const response = await axios.post('http://127.0.0.1:5000/submit', { code });
  return response.data.result;
};
