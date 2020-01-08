/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 09:49:45
 * @Description: system state
 */
const store = window.localStorage;

const state = {
  roles: [],
  user: store.getItem("user") || null
};

export default state;
