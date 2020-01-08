import Vue from "vue";
import VueRouter from "vue-router";
import * as namespace from "../views";

Vue.use(VueRouter);

const routes = [namespace.Home, namespace.About];

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes,
  linkActiveClass: "is-active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
