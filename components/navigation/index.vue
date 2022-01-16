<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <navigation-item v-for="item in menuItems" :key="item" :item="item" />
    </ul>
  </nav>
</template>

<script>
import NavigationItem from "./NavigationItem.vue";
export default {
  components: { NavigationItem },
  data() {
    return {
      menuItems: [
        { name: "Voting", linkImg: "/vote-table.svg" },
        { name: "Breeds", linkImg: "/pet-breeds.svg" },
        { name: "Gallery", linkImg: "/images-search.svg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    align-items: center;
  }
}
</style>
