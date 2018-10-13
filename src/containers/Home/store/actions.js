import { CHANGE_LIST } from './constants';
import { getNewsListApi } from '../../../api';

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch) => {
    return getNewsListApi()
      .then((res) => {
        const list = res.data.data;
        dispatch(changeList(list));
      });
  }
}
