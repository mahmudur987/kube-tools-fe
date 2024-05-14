import axios from "axios";
let url1 = "http://localhost:5000/api";
let url2 = "https://kubetools-be.vercel.app/api";
let url3 = "https://kubetools.io/api";

export const siteToken =
  "f8b6e4857fa015369fe4512a2d05f73fd297f79884936e93a62e27c36df4e1ec771e04359972304d56438e572b93737d34bb8ba05e80b0cd7ef6b80eb9a4dd2b";

const Axios = axios.create({
  baseURL: url3,
  headers: {
    authorization: siteToken,
  },
});

export default Axios;
