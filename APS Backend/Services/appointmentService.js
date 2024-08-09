const appointmentRepository = require('../Repositories/appointmentRepository');

class AppointmentService {
  async createAppointment(appointmentData) {
    return appointmentRepository.createAppointment(appointmentData);
  }


  async confirmAppointment(id) {
    const appointment = await appointmentRepository.findAppointmentById(id);
    if (!appointment) throw new Error('Appointment not found');
    
    return appointmentRepository.updateAppointment(id, { confirmed: true });
  }


  async getAppointmentsForTeacher(teacherId) {
    return appointmentRepository.getAppointmentsForTeacher(teacherId);
  }
}

module.exports = new AppointmentService();