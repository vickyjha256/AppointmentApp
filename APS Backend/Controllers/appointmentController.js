const appointmentService = require("../Services/appointmentService");
const userService = require("../Services/userService");

// Create appointment.
exports.createAppointment = async (req, res) => {
  if (req.user.role != "Student") {
    return res.status(401).send("Access Denied: Unauthorize Access");
  }

  try {
    const isStudent = await userService.getUserById(req.body.studentId);
    if (isStudent.role !== "Student") {
      return res.status(400).json({ error: "Student not found." });
    }

    const isTeacher = await userService.getUserById(req.body.teacherId);
    if (isTeacher.role !== "Teacher") {
      return res.status(400).json({ error: "Teacher not found." });
    }

    const appointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Confirm appointment.
exports.confirmAppointment = async (req, res) => {
  if (req.user.role != "Teacher") {
    return res.status(401).send("Access Denied: Unauthorize Access");
  }

  try {
    const appointment = await appointmentService.confirmAppointment(
      req.params.id
    );

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all appointments for a teacher.
exports.getAppointmentsForTeacher = async (req, res) => {
  if (req.user.role != "Teacher") {
    return res.status(401).send("Access Denied: Unauthorize Access");
  }

  try {
    const appointments = await appointmentService.getAppointmentsForTeacher(
      req.params.teacherId
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
