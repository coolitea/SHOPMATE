import axios from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://backendapi.turing.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

export default client;