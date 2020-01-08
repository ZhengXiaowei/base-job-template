/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 09:49:54
 * @Description: system mutation
 */
import * as type from "./mutation-type";

/* eslint-disable */
const mutation = {
  [type.UPDATE_USER_ROLES](state, roles) {
    state.roles = roles;
  },
  [type.SET_USER_INFO](state, user) {
    state.user = user;
  }
};

export default mutation;
