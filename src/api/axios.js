/*
 * @Author: ZhengXiaowei
 * @Date: 2020-01-08 09:48:10
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:09:04
 * @Description: file content
 * @FilePath: /src/api/axios.js
 */

import axios from "axios";
import store from "@/store";
import { Toast } from "vant";

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api" : "/api",
  timeout: 10000
});

let isCache = 0;

instance.interceptors.response.use(
  res => {
    if (res.data.code === 0) {
      Toast.clear();
      if (isCache === 2) store.dispatch("api/cacheApis", res);
      return res.data.data;
    } else {
      Toast.clear();
      return Promise.reject(res.data);
    }
  },
  error => {
    Toast.clear();
    if (axios.isCancel(error)) return Promise.resolve(error.message);
    return Promise.reject(error);
  }
);

instance.interceptors.request.use(async config => {
  !config.noToast && Toast.loading({ message: "努力加载ing...", duration: 0 });
  isCache = await store.dispatch("api/judgeApis", config);
  if (isCache === 1) {
    // * 缓存存在 不请求
    let apiState = store.state.api;
    let apiKey = apiState.apiPrefix + config.url;
    let data = store.state.api.apiList[apiKey];
    let source = axios.CancelToken.source();
    config.cancelToken = source.token;
    source.cancel(data);
  }
  return config;
});

export default instance;
