import axios from 'axios';
import Web3 from 'web3';

// example testing
export const sendRequest = async() => {
  const result = await axios.get('http://localhost:8080/');
  console.log(result);
};
