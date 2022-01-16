<template>
  <div>
    <input-search />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InputSearch from "~/components/InputSearch.vue";

export default Vue.extend({
  components: { InputSearch },
});
</script>

<style scoped></style>
