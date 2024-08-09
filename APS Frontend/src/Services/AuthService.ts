import axios from 'axios';
import { eType } from '../Types/Index';

const API_URL = 'http://localhost:5000/api';

const register = (userData: eType) => axios.post(`${API_URL}/register`, userData);
const login = (credentials: eType) => axios.post(`${API_URL}/login`, credentials);
const logout = () => axios.post(`${API_URL}/logout`);

export { register, login, logout };