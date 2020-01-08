/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 09:50:22
 * @Description: system actions
 */
import * as type from "./mutation-type";
const store = window.localStorage;

export const userLogin = async ({ commit }, { fn, data }) => {
  const user = await fn(data);
  commit(type.SET_USER_INFO, user);
  store.setItem("user", JSON.stringify(user));
};

export const userLogout = ({ commit }) => {
  commit(type.SET_USER_INFO, null);
  store.removeItem("user");
};
