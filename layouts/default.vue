<template>
  <div class="container">
    <div class="app">
      <div class="app__left">
        <div class="container">
          <header class="app__left-header">
            <nuxt-link to="/"><img src="/logo.svg" alt="logo" /></nuxt-link>
          </header>
          <div class="app__left-top">
            <h2 class="app__left-title">Hi there!</h2>
            <p class="app__left-text">Welcome to Dogs website</p>
          </div>
          <div class="app__left-bottom">
            <navigation />
          </div>
        </div>
      </div>
      <div class="app__right">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navigation from "~/components/navigation/index.vue";

export default Vue.extend({
  components: { Navigation },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.app {
  display: flex;

  &__left {
    width: 50%;

    &-header {
      padding-top: 30px;
      margin-bottom: 80px;
    }

    &-top {
      margin-bottom: 60px;
    }

    &-title {
      font-weight: 500;
      font-size: 44px;
      margin-bottom: 10px;
      color: $black;
    }

    &-text {
      font-size: 20px;
      color: $gray;
    }

    &__bottom {
    }
  }

  &__right {
    width: 50%;
  }
}
</style>
