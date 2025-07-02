import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default apiRequest;
