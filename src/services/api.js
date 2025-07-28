import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:3000', // You can change this to your API URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors here (like 401 unauthorized)
    if (error.response.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      // You might want to redirect to login page here
    }
    return Promise.reject(error);
  }
);

export default instance;
