<template>
  <div
    @click="toggleIsOpen"
    v-click-outside="closeDropdown"
    :class="{ select: true, 'select--gray': isGray }"
    tabindex="0"
  >
    <div class="select__value">{{ currentValue }}</div>
    <img
      :class="{ 'select__open-icon': true, 'select__open-icon--top': isOpen }"
      src="arrow.svg"
      alt="arrow"
    />
    <div
      :class="{
        'select__dropdown-list': true,
        'select__dropdown-list--show': isOpen,
      }"
    >
      <div
        @click="pickCurrentValue(item)"
        v-for="item of dropdownList"
        :key="item"
        :class="{
          'select__dropdown-list__item': true,
          'select__dropdown-list__item--active': currentValue === item,
        }"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    isGray: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      dropdownList: ["All breeds", "One dog", "Two dog", "Three dog"],
      isOpen: false,
      currentValue: "All breeds",
    };
  },
  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    pickCurrentValue(value: string) {
      this.currentValue = value;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.select {
  $select: &;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background: #fff;
  border-radius: 10px;
  padding: 8px 10px;
  max-width: 226px;
  height: 40px;
  border: 2px solid transparent;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease;

  &:hover {
    border-color: rgba($color: $purple, $alpha: 0.5);
  }

  &:focus {
    border-color: rgba($color: $purple, $alpha: 0.8);
  }

  &--gray {
    background: $light-gray;

    #{$select}__dropdown-list {
      background: $light-gray;
    }
  }

  &__value {
    font-size: 16px;
    color: $gray;
  }

  &__open-icon {
    display: block;
    width: 12px;
    height: 12px;
    transition: all 0.1s ease;

    &--top {
      transform: rotate(180deg);
    }
  }

  &__dropdown-list {
    position: absolute;
    top: 115%;
    right: 0;
    z-index: 1;
    width: 100%;
    background: #ffffff;
    border-radius: 30px;
    padding: 10px;
    transition: all 0.1s ease;
    opacity: 0;
    visibility: hidden;

    &--show {
      opacity: 1;
      visibility: visible;
    }

    &__item {
      padding: 10px;
      font-size: 16px;
      color: $gray;
      transition: all 0.1s ease;
      border-radius: 10px;

      &--active,
      &:hover {
        background: rgba($color: $purple, $alpha: 0.5);
        color: darken($gray, 35%);
      }
    }
  }
}
</style>
