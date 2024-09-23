import axios from "axios";
import { API_BASE_PATH } from "../constants/api-endpoints";


export const login = (email: string, password: string) => {
  return axios.post(`${API_BASE_PATH}/login`, { email, password });
};

export const register = (email: string, password: string) => {
  return axios.post(`${API_BASE_PATH}/register`, { email, password });
};

export const fetchUsers = () => {
  return axios.get(`${API_BASE_PATH}/users`);
};
