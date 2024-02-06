import axios from "axios";

const instance = axios.create({
  baseURL: `https://${process.env.REACT_APP_DOG_URL}`,
});

export default instance;