const express = require('express');
const appointmentController = require('../Controllers/appointmentController');
const {body} = require("express-validator");
const authMiddleware = require('../MiddleWares/authMiddleware');

const router = express.Router();

// Appointment routes
router.post('/appointments',[
body("studentId").exists(),
body("teacherId").exists(),
], authMiddleware, appointmentController.createAppointment);

router.put('/appointments/:id', authMiddleware, appointmentController.confirmAppointment);

router.get('/appointments/teacher/:teacherId', authMiddleware, appointmentController.getAppointmentsForTeacher);

module.exports = router;