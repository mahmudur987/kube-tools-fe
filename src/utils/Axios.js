import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kubetools-be.vercel.app",
});

export default Axios;
