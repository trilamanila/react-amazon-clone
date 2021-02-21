import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-ad8ea/us-central1/api"
});

export default instance;
