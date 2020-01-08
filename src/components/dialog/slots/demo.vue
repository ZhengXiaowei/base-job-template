<template>
  <x-info-dialog :visible="visible">
    <p>我是内容</p>
  </x-info-dialog>
</template>

<script>
import infoDialog from "../dialog.vue";

export default {
  components: {
    "x-info-dialog": infoDialog
  }
};
</script>