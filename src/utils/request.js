import axios from 'axios';

const isServer = typeof window === 'undefined';

const instance = axios.create({
  baseURL: isServer ? 'http://47.95.113.63/ssr' : '/'
});

instance.interceptors.request.use((config) => {
  if (process.env.COOKIE) {
    config.headers.cookie = process.env.COOKIE;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
