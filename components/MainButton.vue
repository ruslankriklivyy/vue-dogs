<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.btn {
  display: block;
  bottom: 0;
  border-radius: 10px;
  background: $purple;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
}
</style>
