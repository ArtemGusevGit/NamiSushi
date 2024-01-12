<script setup>
import {  computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'

const store = useStore()
const isMobileMenuOpen = computed(() => store.getters.getMobileMenuStatus)

const toggleMobileMenu = () => {
  store.commit('toggleMobileMenu')
}
</script>
<template>
  <div
    class="mobile-menu-toggle"
    :class="[
      `mobile-menu-toggle--variant-primary`,
      { active: isMobileMenuOpen },
    ]"
    @click="toggleMobileMenu"
  >
    <span />
  </div>
</template>
<style lang="scss" scoped>
$mobile-menu-toggle-width: 1.5rem;
$mobile-menu-toggle-padding: 0.5rem;

.mobile-menu-toggle {
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  font-family: Verdana, sans-serif;
  height: calc(1rem + $mobile-menu-toggle-padding * 2);
  justify-content: center;
  z-index: 9999;

  span {
    backface-visibility: hidden;
    background-color: $white;
    border-radius: 2px;
    display: block;
    height: 2px;
    pointer-events: none;
    position: relative;
    transition: all 0.3s;
    width: $mobile-menu-toggle-width;

    &,
    &::after,
    &::before {
      background-color: $white;
    }

    &::after,
    &::before {
      backface-visibility: hidden;
      background-color: $white;
      border-radius: 2px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      top: -7px;
      transition: all 0.3s;
      width: 100%;
    }

    &::after {
      top: 7px;
    }
  }

  &.active span {
    background-color: transparent !important;

    &::before {
      top: 0;
      transform: rotate(45deg) translate(-1px, 0);
    }

    &::after {
      left: 0;
      top: 8px;
      transform: rotate(-45deg) translate(6px, -7px);
      width: 100%;
    }
  }

  &.mobile-menu-toggle--variant-primary {
    &.active {
      span {
        &,
        &::before,
        &::after {
          background-color: $white;
        }
      }
    }

    &:hover {
      span {
        &,
        &::before,
        &::after {
          background-color: $primary;
        }
      }
    }
  }

  &.mobile-menu-toggle--variant-dark {
    &.active {
      span {
        &,
        &::before,
        &::after {
          background-color: $white;
        }
      }
    }

    &:hover {
      span {
        &,
        &::before,
        &::after {
          background-color: $primary;
        }
      }
    }
  }

  &.mobile-menu-toggle--variant-light {
    span {
      &,
      &::after,
      &::before {
        background-color: $white;
      }
    }

    &.active {
      span {
        &,
        &::before,
        &::after {
          background-color: $white;
        }
      }
    }

    &:hover {
      span {
        &,
        &::before,
        &::after {
          background-color: $primary;
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
