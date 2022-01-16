<template>
  <div class="home">
    <img class="home__img" src="/girl-and-pet.png" alt="girl and pet" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  layout: "default",
});
</script>

<style lang="scss" scoped>
.home {
  position: absolute;
  margin-top: 50px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -40%;
    transform: translateX(-50%);
    bottom: 0;
    width: 87%;
    height: 96%;
    background: #fbe0dc;
    border-radius: 20px;
    z-index: -1;
  }

  &__img {
    width: 100%;
    height: 90%;
  }
}
</style>
