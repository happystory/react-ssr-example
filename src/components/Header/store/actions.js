import { CHANGE_LOGIN } from './constants';
import { isLoginApi, loginApi, logoutApi } from '../../../api';

const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
});

export const login = () => {
  return (dispatch) => {
    return loginApi()
      .then((res) => {
        dispatch(changeLogin(true));
      });
  }
}

export const logout = () => {
  return (dispatch) => {
    return logoutApi()
      .then((res) => {
        dispatch(changeLogin(false));
      });
  }
}


export const getHeaderInfo = () => {
  return (dispatch) => {
    return isLoginApi()
      .then((res) => {
        dispatch(changeLogin(res.data.data.login));
      });
  }
}
