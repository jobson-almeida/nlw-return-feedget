import axios from "axios";

const timeoutMilliseconds = 90000
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: timeoutMilliseconds
});
