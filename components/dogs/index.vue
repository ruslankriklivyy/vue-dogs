<template>
  <div class="dogs">
    <div
      v-for="(dog, index) of dogs"
      :key="dog.id"
      :class="`dogs__item dogs__item--${index + 1}`"
    >
      <div class="dogs__item-overlay">
        <div class="dogs__item-overlay-info">
          <div class="dogs__item-overlay-info__name">{{ dog.name }}</div>
        </div>
      </div>
      <div class="dogs__item-photo">
        <img :src="dog.image.url" alt="dog" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      dogs: [],
    };
  },
  async fetch() {
    try {
      const { data: dogs } = await this.$axios.get("breeds?limit=10");
      this.dogs = dogs;
    } catch (error) {
      console.log(error);
    }
  },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.dogs {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 5vw);
  grid-gap: 15px;

  &__item {
    $item: &;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      #{$item}-overlay {
        opacity: 1;
        visibility: visible;
      }
    }

    &--1 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &--2 {
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 1;
      grid-row-end: 3;
    }

    &--3 {
      grid-column-start: 7;
      grid-column-end: 14;
      grid-row-start: 1;
      grid-row-end: 5;
    }

    &--4 {
      grid-column-start: 1;
      grid-column-end: 7;
      grid-row-start: 3;
      grid-row-end: 7;
    }

    &--5 {
      grid-column-start: 7;
      grid-column-end: 14;
      grid-row-start: 5;
      grid-row-end: 7;
    }

    &--6 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 7;
      grid-row-end: 11;
    }

    &--7 {
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 7;
      grid-row-end: 9;
    }

    &--8 {
      grid-column-start: 7;
      grid-column-end: 14;
      grid-row-start: 7;
      grid-row-end: 9;
    }

    &--9 {
      grid-column-start: 4;
      grid-column-end: 14;
      grid-row-start: 9;
      grid-row-end: 13;
    }

    &--10 {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 11;
      grid-row-end: 13;
    }

    &-overlay {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba($color: $purple, $alpha: 0.6);
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;

      &-info {
        width: 100%;
        position: absolute;
        left: 50%;
        bottom: 10px;
        transform: translateX(-50%);

        &__name {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 90%;
          height: 34px;
          font-size: 16px;
          background: #ffffff;
          border-radius: 10px;
          color: $purple;
          padding: 5px;
          text-align: center;
          margin: 0 auto;
        }
      }
    }

    &-photo {
      width: 100%;
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
