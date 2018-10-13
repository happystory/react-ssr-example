import request from '../../../utils/request';
import { CHANGE_LOGIN } from './constants';

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
});

export const login = () => {
  return (dispatch) => {
    return request.get('/api/login.json?secret=M5s2sPneDE')
      .then((res) => {
        dispatch(changeLogin(true));
      });
  }
}

export const logout = () => {
  return (dispatch) => {
    return request.get('/api/logout.json?secret=M5s2sPneDE')
      .then((res) => {
        dispatch(changeLogin(false));
      });
  }
}


export const getHeaderInfo = () => {
  return (dispatch) => {
    return request.get('/api/isLogin.json?secret=M5s2sPneDE')
      .then((res) => {
        dispatch(changeLogin(res.data.data.login));
      });
  }
}
