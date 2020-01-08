/*
 * @Author: ZhengXiaowei
 * @Date: 2020-01-08 10:26:24
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:38:07
 * @Description: dialog 二次封装
 * @FilePath: /src/components/dialog/index.js
 */

import Vue from "vue";

import DemoDialogWrap from "./slots/demo.vue";

let instance = null;

function infoDialogConstruction(component) {
  const Component = Vue.extend(component);
  return function(params = {}) {
    if (instance) return;
    return new Promise((resolve, reject) => {
      instance = new Component({
        el: document.createElement("div"),
        data: Object.assign({ visible: true }, params),
        methods: {
          resolve,
          reject,
          close() {
            this.visible = false;
            resolve(this.$data);
          }
        },
        destroyed() {
          this.$el.parentNode.removeChild(
            document.querySelector(".van-overlay")
          );
          this.$el.parentNode.removeChild(this.$el);
          instance = null;
        }
      });
      document.body.appendChild(instance.$el);
    });
  };
}

export const DemoDialog = infoDialogConstruction(DemoDialogWrap);
