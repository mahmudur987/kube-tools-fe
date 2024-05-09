import axios from "axios";

const Axios = axios.create({
  baseURL: "https://kubetools.io/api",
});

export default Axios;
