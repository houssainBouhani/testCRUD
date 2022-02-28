import axios from "axios";

const api = axios.create({

  baseURL: "http://localhost:3001",
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default api;
