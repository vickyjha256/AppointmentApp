import axios from 'axios';
import {eType} from '../Types/Index';

const API_URL = 'http://localhost:5000/api';

const createAppointment = (appointmentData: eType) => axios.post(`${API_URL}/appointments`, appointmentData);
const confirmAppointment = (id: eType) => axios.put(`${API_URL}/appointments/${id}/confirm`);
const getAppointmentsForTeacher = (teacherId: eType) => axios.get(`${API_URL}/appointments/teacher/${teacherId}`);

export { createAppointment, confirmAppointment, getAppointmentsForTeacher };
