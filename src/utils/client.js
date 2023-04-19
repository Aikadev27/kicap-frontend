import axios from "axios";
import Token from "./token";

const client = axios.create({
  baseURL: "http://localhost:3000/api/",
});

client.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${Token.token}`;
  return req;
});

export default client;
