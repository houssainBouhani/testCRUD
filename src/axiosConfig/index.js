import axios from "axios";

const api = axios.create({
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default api;
