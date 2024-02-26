import axios from "axios";

const Axios = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://kubetools-be.vercel.app",
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default Axios;
