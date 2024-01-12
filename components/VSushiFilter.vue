<script setup>
import { ref } from 'vue'
import { sushiItems } from '~/shared/consts'

const activeItem = ref(0)

const setActiveItem = (index) => {
  activeItem.value = index
}
</script>

<template>
  <ul class="sushi-filter">
    <li
      v-for="(item, index) in sushiItems"
      :key="index"
      class="sushi-filter__item"
      :class="{ 'active': activeItem === index }"
      @click="setActiveItem(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.sushi-filter {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: $primary;
  gap: 0.5rem;
  text-wrap: nowrap;
  justify-content: center;
  padding: 0;
  flex-wrap: wrap;
  margin: 3.125rem 0 3.75rem;
}

.sushi-filter__item {
  font-size: 1.75rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 6.2rem;
  transition: $transition-base;
  background-color: $white;

  @include media-breakpoint-down(xl) {
    font-size: 1.3rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1rem;
  }
}

.active {
  background-color: $secondary;
  color: $white;
}
</style>
