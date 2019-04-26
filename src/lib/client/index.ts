import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
  headers: {
    "Content-Type": "application/json"
  }
  // withCredentials: true,
});

export default client;
