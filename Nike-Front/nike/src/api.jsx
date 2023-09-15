import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

const api = setupInterceptorsTo(
  axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      'Content-Type': 'application/json',
    },
  })


);

setupInterceptorsTo(api);


export default api;
