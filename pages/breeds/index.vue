<template>
  <div class="main__content">
    <div class="top-bar">
      <input-search />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputSearch from "~/components/InputSearch.vue";

export default Vue.extend({
  components: { InputSearch },
});
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
