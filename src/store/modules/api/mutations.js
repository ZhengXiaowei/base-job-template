/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:04:44
 * @Description: api mutation
 */
import * as type from "./mutation-type";

/* eslint-disable */
const mutation = {
  [type.SET_API](state, apiObj) {
    state.apiList[apiObj.url] = apiObj.data;
  },
  [type.RESET_API](state) {
    state.apiList = {};
  },
  [type.UPDATE_API](state, update) {
    if (state.apiList[update.url]) {
      state.apiList[update.url][update.key] = update.value;
    }
  }
};

export default mutation;
