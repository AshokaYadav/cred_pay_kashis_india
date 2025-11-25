import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.recharge.kashishindiapvtltd.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
