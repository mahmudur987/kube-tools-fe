import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    authorization:
      "f8b6e4857fa015369fe4512a2d05f73fd297f79884936e93a62e27c36df4e1ec771e04359972304d56438e572b93737d34bb8ba05e80b0cd7ef6b80eb9a4dd2b",
  },
});

export default Axios;
