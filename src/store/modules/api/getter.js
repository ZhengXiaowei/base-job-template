/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors: ZhengXiaowei
 * @LastEditTime: 2019-12-01 00:25:51
 * @Description: system getters
 */
// * 用户角色
export const showUserRoles = state => {
  return state.roles;
};

// * 用户信息
export const userInfo = state => {
  let user = state.user;
  if (user && typeof user === "string") return JSON.parse(user);
  else return user;
};
