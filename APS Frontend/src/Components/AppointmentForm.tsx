import { useState } from "react";

const AppointmentForm = () => {
  const [appointment, setAppointment] = useState({
    studentName: '',
    teacher: '',
    date: '',
    time: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(appointment);
  }
  return (
    <>
    <div>
      <h2 className="text-center">Enter details for book an appointment.</h2>
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
          Student Name
        </label>
        <input
          type="text"
          name="studentName"
          id="studentName"
          value={appointment.studentName}
          onChange={handleOnChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">
          Select Teacher
        </label>
        <select
          name="teacher"
          id="teacher"
          value={appointment.teacher}
          onChange={handleOnChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        >
          <option value="">Select a teacher</option>
          <option value="teacher1">Teacher 1</option>
          <option value="teacher2">Teacher 2</option>
          <option value="teacher3">Teacher 3</option>
          {/* Add more teachers as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={appointment.date}
          onChange={handleOnChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Time
        </label>
        <input
          type="time"
          name="time"
          id="time"
          value={appointment.time}
          onChange={handleOnChange}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Appointment
        </button>
      </div>
    </form>
    </div>
    </>
  )
}

export default AppointmentForm;