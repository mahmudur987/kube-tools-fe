import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kubetools-be.vercel.app/api",
});

export default Axios;
