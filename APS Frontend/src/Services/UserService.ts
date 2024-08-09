import axios from "axios";
import { eType } from "../Types/Index";

const API_URL = "http://localhost:5000/api";

const getUsers = () => axios.get(`${API_URL}/users`);

const getUserById = (id: eType) => axios.get(`${API_URL}/users/${id}`);

const updateUser = (id: eType, userData: eType) =>
  axios.put(`${API_URL}/users/${id}`, userData);

const deleteUser = (id: eType) => axios.delete(`${API_URL}/users/${id}`);

export { getUsers, getUserById, updateUser, deleteUser };
