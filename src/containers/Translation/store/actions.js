import request from '../../../utils/request';
import { CHANGE_LIST } from './constants';


const changeTranslationList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch) => {
    return request.get('/api/translations.json?secret=M5s2sPneDE')
      .then((res) => {
        const list = res.data.success ? res.data.data : [];
        dispatch(changeTranslationList(list));
      });
  }
}
