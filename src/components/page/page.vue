<!--
 * @Author: ZhengXiaowei
 * @Date: 2019-08-05 14:56:40
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:54:32
 * @Description: file content
 -->
<template>
  <div class="page-component">
    <!-- 页面头部 -->
    <div class="x-page__header"
         v-if="!hideHeader">
      <a class="back"
         href="javascript:history.back();">
      </a>
      <!-- 头部可自定义替换 -->
      <slot name="header">
        <span class="x-page__title">{{title || $route.meta.title}}</span>
      </slot>
      <div class="header-right">
        <slot name="right"></slot>
      </div>
    </div>
    <!-- 页面主体内容 -->
    <div class="x-page__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "XPage",
  props: {
    hideHeader: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
