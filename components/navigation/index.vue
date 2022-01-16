<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <navigation-item v-for="item in menuItems" :key="item.id" :item="item" />
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
        { name: "Voting", id: 1, linkImg: "/vote-table.svg" },
        { name: "Breeds", id: 2, linkImg: "/pet-breeds.svg" },
        { name: "Gallery", id: 3, linkImg: "/images-search.svg" },
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
