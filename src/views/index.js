/*
 * @Author: ZhengXiaowei
 * @Date: 2020-01-08 10:17:19
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:19:42
 * @Description: 页面文件
 * @FilePath: /src/views/index.js
 */
// * meta参数解释
/**
 * title: 页面标题
 * keepAlive: 该页面组件是否需要使用keep-alive进行缓存
 */

export const Home = {
  name: "Home",
  path: "/",
  meta: {
    title: "首页",
    keepAlive: false
  },
  component: () => import("./Home.vue")
};

export const About = {
  name: "About",
  path: "/about",
  meta: {
    title: "关于我",
    keepAlive: false
  },
  component: () => import("./About.vue")
};
