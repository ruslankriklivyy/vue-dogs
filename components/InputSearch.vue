<template>
  <div class="search">
    <input type="text" placeholder="Search for breeds by name" />
    <button><img src="/search.svg" alt="search" /></button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.search {
  position: relative;
  width: 470px;
  height: 60px;

  input {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    padding: 0 20px;
    border: 2px solid transparent;
    color: $black;
    font-size: 20px;
    transition: all 0.2s ease;
    outline: none;

    &::placeholder {
      color: $gray;
      font-size: 20px;
    }

    &:hover {
      border-color: $light-purple;
    }

    &:focus {
      border-color: $purple;
      &::placeholder {
        font-size: 0;
      }
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border: none;
    background: $light-purple;
    border-radius: 10px;
    cursor: pointer;
  }
}
</style>
