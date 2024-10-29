import axios from 'axios';

const apiUrl = 'http://localhost:8000/api'; // Adjust to your Laravel server URL

const ApiService = {
  register(data) {
    return axios.post(`${apiUrl}/register`, data);
  },
  sendOtp(email) {
    return axios.post(`${apiUrl}/send-otp`, { email });
  },
  verifyOtp(email, otp) {
    return axios.post(`${apiUrl}/verify-otp`, { email, otp });
  },
};

export default ApiService;
