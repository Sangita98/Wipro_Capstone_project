package com.wellness.dao;



public class AppointmentRequest {
	 private String email;
	    private String courseName;
	    private String appointmentDate;
	    private String appointmentTime;
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getCourseName() {
			return courseName;
		}
		public void setCourseName(String courseName) {
			this.courseName = courseName;
		}
		public String getAppointmentDate() {
			return appointmentDate;
		}
		public void setAppointmentDate(String appointmentDate) {
			this.appointmentDate = appointmentDate;
		}
		public String getAppointmentTime() {
			return appointmentTime;
		}
		public void setAppointmentTime(String appointmentTime) {
			this.appointmentTime = appointmentTime;
		}
	
}
