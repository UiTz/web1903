import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api',
  headers: {'Content-Type':'application/x-www-form-urlencoded'},
});

export default http;
