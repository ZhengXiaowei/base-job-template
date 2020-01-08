/*
 * @Author: ZhengXiaowei
 * @Date: 2019-11-22 14:31:28
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:05:57
 * @Description: api actions
 */
import * as type from "./mutation-type";

// * 判断缓存中是否缓存了api，缓存则返回数据
// * 0-不需要缓存 1-缓存池中已存在 2-缓存池中未存在
export const judgeApis = ({ state }, api) => {
  if (api.cache) {
    // * 已存
    let apiKey = state.apiPrefix + api.url;
    if (state.apiList[apiKey]) {
      return 1;
    } else return 2;
  }
  return 0;
};

// * 缓存api
export const cacheApis = ({ commit, state }, api) => {
  // * 达到缓存最大值 清空
  if (getObjectLength(state.apiList) === state.maxCache) commit(type.RESET_API);
  let apiObj = {
    url: api.config.url,
    data: api.data.data
  };
  commit(type.SET_API, apiObj);
};

// * 更新
export const updateApis = ({ commit }, update) => {
  commit(type.UPDATE_API, update);
};

function getObjectLength(obj) {
  let count = 0;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) count++;
  }
  return count;
}
