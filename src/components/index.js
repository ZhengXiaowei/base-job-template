/*
 * @Author: ZhengXiaowei
 * @Date: 2020-01-08 10:21:55
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:36:07
 * @Description: 组件入口
 * @FilePath: /src/components/index.js
 */

import Vue from "vue";

import Page from "./page/page.vue";

import { Lazyload, Dialog, List, Skeleton, Toast, Icon } from "vant";

Vue.use(Lazyload, {
  loading: require("../assets/loading.gif")
})
  .use(Dialog)
  .use(List)
  .use(Skeleton)
  .use(Toast)
  .use(Icon);

Vue.component(Page.name, Page);
