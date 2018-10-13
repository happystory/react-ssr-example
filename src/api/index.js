import request from '../utils/request';

export const isLoginApi = () => request.get('/api/isLogin.json');

export const loginApi = () => request.get('/api/login.json');

export const logoutApi = () => request.get('/api/logout.json');

export const getNewsListApi = () => request.get('/api/news.json');

export const getTranslationListApi = () => request.get('/api/translations.json');
