import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-fir-ad8ea.cloudfunctions.net/api"

  //"http://localhost:5001/fir-ad8ea/us-central1/api"
});

export default instance;
