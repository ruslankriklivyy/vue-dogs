<template>
  <div class="dogs">
    <div class="dogs__item">
      <div class="dogs__item-overlay">
        <main-button>Dog name</main-button>
      </div>
      <div class="dogs__item-photo">
        <img
          src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBkb2d8ZW58MHx8MHx8&w=1000&q=80"
          alt="dog"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainButton from "../MainButton.vue";

export default Vue.extend({
  components: { MainButton },
});
</script>

<style lang="scss" scoped></style>
