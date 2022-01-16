<template>
  <li class="navigation__list-item">
    <nuxt-link
      :to="item.name.trim().toLowerCase()"
      :class="{
        'navigation__list-item-link': true,
        'navigation__list-item-link navigation__list-item-link--active':
          $nuxt.$route.path.includes(item.name.trim().toLowerCase()),
      }"
    >
      <div class="navigation__list-item-top">
        <img :src="item.linkImg" alt="link icon" />
      </div>
      <div class="navigation__list-item-bottom">
        {{ item.name }}
      </div>
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { MenuItem } from "~/interfaces";

export default Vue.extend({
  props: {
    item: {
      type: Object as PropType<MenuItem>,
      required: true,
      default: {},
    },
  },
});
</script>

<style lang="scss" scoped>
@import "~/styles/colors.scss";

.navigation {
  &__list-item {
    $item: &;
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }

    &-top {
      display: flex;
      align-items: center;
      background: #b4b7ff;
      border: 4px solid rgba(255, 255, 255, 0.6);
      box-sizing: border-box;
      border-radius: 20px;
      padding: 36px 19px;
      height: 80%;
      margin-bottom: 10px;
      transition: all 0.2s ease;

      img {
        display: block;
        width: 100px;
        height: 125px;
        pointer-events: none;
      }
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20%;
      background: #ffffff;
      border-radius: 10px;
      padding: 15px 0;
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 2px;
      color: $purple;
      transition: all 0.2s ease;
    }

    &-link {
      width: 138px;
      height: 244px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
        #{$item}-top {
          border-color: #fff;
        }

        #{$item}-bottom {
          background: $purple-light;
        }
      }

      &:active {
        #{$item}-top {
          border-color: $purple-light;
        }

        #{$item}-bottom {
          background: $purple;
          color: #fff;
        }
      }

      &--active {
        #{$item}-top {
          border-color: $purple-light;
        }

        #{$item}-bottom {
          background: $purple;
          color: #fff;
        }

        &:hover {
          #{$item}-top {
            border-color: $purple-light;
          }

          #{$item}-bottom {
            background: $purple;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
