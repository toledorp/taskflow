import axios from 'axios';

const api = axios.create({
  baseURL: 'http://68.211.112.101:3000/', // Replace with your API base URL
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;