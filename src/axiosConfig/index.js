import axios from "axios";

const api = axios.create({

  baseURL: "https://goofy-euclid-b2bf86.netlify.app",
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default api;
