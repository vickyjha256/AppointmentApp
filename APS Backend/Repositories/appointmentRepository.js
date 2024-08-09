const Appointment = require('../Models/Appointment');

class AppointmentRepository {
  async createAppointment(data) {
    return Appointment.create(data);
  }

  async findAppointmentById(id) {
    return Appointment.findByPk(id);
  }

  async getAppointmentsForTeacher(teacherId) {
    return Appointment.findAll({ where: { teacherId } });
  }

  async updateAppointment(id, data) {
    const appointment = await Appointment.findByPk(id);
    if (appointment) {
      return appointment.update(data);
    }
    return null;
  }
}

module.exports = new AppointmentRepository();