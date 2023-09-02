import axios from "axios";
import { API_BASE_URL } from "@shared/config";

export const apiInstance = axios.create({
  baseURL: API_BASE_URL
});
