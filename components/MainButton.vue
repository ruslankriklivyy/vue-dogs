<template>
  <button
    :class="{
      btn: true,
      'btn--light': light,
    }"
    type="type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
    },
    light: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.btn {
  display: block;
  border-radius: 10px;
  background: $purple;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  letter-spacing: 2px;
  text-align: center;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &--light {
    background: #fff;
    color: $purple;
  }
}
</style>
