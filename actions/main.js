// import * as actionTypes from '../constant';
// import urls from '../constant/urls';
// import { CALL_API } from '../middlewares/api';

/**
 * @description  页面跳转
 */
export function redirect(path) {
  return dispatch => dispatch(push(path));
}

export function changeShowChangeLogModalState(value){
    return {type: 'change', value}
}
