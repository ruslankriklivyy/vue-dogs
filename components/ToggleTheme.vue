<template>
  <div
    :class="{
      'toggle-theme': true,
      'toggle-theme--dark': isDarkMode,
    }"
  >
    <div class="toggle-theme__circle">
      <img v-if="!isDarkMode" src="/eye.svg" alt="eye" />
      <img v-if="isDarkMode" src="/closed-eye.svg" alt="closed eye" />
    </div>
    <div class="toggle-theme__btn">
      <button @click="toggleDarkMode"><span></span></button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      isDarkMode: false,
    };
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.isDarkMode
        ? document.querySelector<HTMLElement>("body")?.classList.add("dark")
        : document.querySelector<HTMLElement>("body")?.classList.remove("dark");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.toggle-theme {
  $self: &;
  display: flex;
  align-items: center;
  position: absolute;
  top: 29px;
  right: 20%;

  &--dark {
    #{$self}__circle {
      background: rgba(255, 255, 255, 0.05);
    }

    #{$self}__btn {
      button {
        background: rgba(255, 134, 142, 0.2);
        span {
          margin-left: 0;
        }
      }
    }
  }

  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 100%;
    margin-right: 5px;
    transition: all 0.2s ease;
  }

  &__btn {
    button {
      width: 44px;
      height: 24px;
      background: $light-purple;
      border-radius: 50px;
      border: none;
      transition: all 0.2s ease;
      cursor: pointer;

      span {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 100%;
        background: $purple;
        margin-left: auto;
        transition: all 0.2s ease;
      }
    }
  }
}
</style>
