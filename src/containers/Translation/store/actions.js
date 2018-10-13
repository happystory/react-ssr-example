import { CHANGE_LIST } from './constants';
import { getTranslationListApi } from '../../../api';

const changeTranslationList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch) => {
    return getTranslationListApi()
      .then((res) => {
        const list = res.data.success ? res.data.data : [];
        dispatch(changeTranslationList(list));
      });
  }
}
