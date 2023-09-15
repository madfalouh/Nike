import axios from 'axios';

const API_URL = "http://localhost:8080/";

const onRequest = (config) => {
  const access_token = localStorage.getItem('accessToken');
  if (access_token) {
    config.headers['Authorization'] = `Bearer ${access_token}`;
  }
  return config;
};


const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  const originalRequest = error.config;
  if (error.response) {
    if (error.response.status === 401 && error.response.data.message === 'jwt expired' && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const res = await axios.post(`${API_URL}/api/v1/auth/refresh-token`, {
          refresh_token: refreshToken,
        });
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        originalRequest.headers['Authorization'] = 'Bearer ' + res.data.accessToken;
        return axios(originalRequest);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};


export const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
