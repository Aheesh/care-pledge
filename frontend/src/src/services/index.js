import axios from 'axios';

// example testing
export const sendRequest = async() => {
  const result = await axios.get('http://localhost:8080/');
  console.log(result);
};