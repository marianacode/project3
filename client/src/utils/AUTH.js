import axios from "axios";

export default {
  // Gets user info
  getUser: function() {
    return axios.get('/api/user/currentuser');
  },
  // Logs the user out
  logout: function() {
    return axios.post('/api/user/logout');
  },
  // Log the user in
  login: function(username, password) {
    return axios.post('/api/user/login', { username, password });
  },
  // New user registration
  signup: function(userData) {
    return axios.post('/api/user/signup',  userData );
  }
};