<!--
 * @Author: ZhengXiaowei
 * @Date: 2019-08-13 15:13:52
 * @LastEditors  : ZhengXiaowei
 * @LastEditTime : 2020-01-08 10:26:19
 * @Description: file content
 -->
<template>
  <van-dialog v-model="show"
              :show-confirm-button="false"
              :close-on-click-overlay="closeOnClickMask"
              close-on-popstate>
    <slot></slot>
  </van-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    closeOnClickMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    visible(val) {
      this.show = val;
    },
    show(v) {
      if (!v) {
        setTimeout(() => {
          this.$parent.$destroy();
          this.$parent.reject();
        }, 500);
      }
    }
  },
  mounted() {
    this.show = this.visible;
  }
};
</script>
