import request from '../../../utils/request';
import { CHANGE_LIST } from './constants';


const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = (server) => {
  return (dispatch) => {
    return request.get('/api/news.json?secret=M5s2sPneDE')
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      });
  }
}
