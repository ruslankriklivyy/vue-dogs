<template>
  <div class="main__content">
    <div class="top-bar">
      <input-search />
    </div>
    <div class="white-box">
      <div class="white-box__head">
        <!-- <main-button>Back</main-button> -->
      </div>
      <div class="white-box__content">
        <dogs />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
