import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.mocky.io/v2/5c923b0932000029056bce39',
});

export default api;
