import axios from 'axios';

const isServer = typeof window === 'undefined';

const SECRECT = 'M5s2sPneDE';

const instance = axios.create({
  baseURL: isServer ? 'http://47.95.113.63/ssr' : '/',
  params: {
    secret: SECRECT
  }
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
