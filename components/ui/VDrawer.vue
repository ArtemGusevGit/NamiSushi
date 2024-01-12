<script setup>
import { useStore } from '@nuxtjs/composition-api'
import { computed } from 'vue'
import VOrder from '~/components/VOrder.vue'
import VBasket from '~/components/VBasket.vue'

const store = useStore()
const isSidebarOpen = computed(() => store.getters.getSidebarStatus)
const isOrderingMenuOpen = computed(() => store.getters.getOrderingMenuStatus)

const toggleSidebar = () => {
  store.commit('toggleSidebar')
}
</script>

<template>
  <div>
    <div
      class="blur-overlay"
      :class="{'open': isSidebarOpen}"
      @click="toggleSidebar"
    />
    <div
      class="sidebar"
      :class="{'open': isSidebarOpen}"
    >
      <div v-if="!isOrderingMenuOpen">
        <VBasket />
      </div>
      <VOrder v-else />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 38.3rem;
  background-color: #EBE1D7;
  color: $secondary;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  transform: translateX(100%);
  z-index: 9999;
  padding: 2.5rem 2.5rem 2.81rem 2.81rem;
  overflow-y: scroll;

  @include media-breakpoint-down(md) {
    width: 100%
  }
}

.sidebar.open {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.blur-overlay.open {
  transform: translateX(0);
}

.blur-overlay {
  transform: translateX(100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(60, 75, 97, 0.60);
  backdrop-filter: blur(11px);
  opacity: 0;
  z-index: 9998;
}

.blur-overlay.open {
  opacity: 1;
}

.basket-list {
  margin-top: 1.875rem;
}

.sushi-item {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 0.5rem;
  position: relative;

  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
}

.sushi-img {
  width: 5rem;
  height: 5rem;
}

.sushi-item__desc {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  margin-left: 1.6rem;
  margin-right: 2rem;
  width: 13.1rem;
  color: #717171;
  font-size: 0.81rem;
  font-family: PTSansNarrow, sans-serif;

  @include media-breakpoint-down(md) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.sushi-title {
  color: $dark;
  line-height: 25px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: Neucha, sans-serif;
}

.sushi-icon {
  position: absolute;
  top: 3px;
  left: 150px;
  z-index: 999;
  cursor: pointer;

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.sushi-item__actions {
  text-wrap: nowrap;
  @include media-breakpoint-down(md) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @include media-breakpoint-down(sm) {
    margin: 0 auto;
  }
}

.sushi-counter {
  margin: 0.75rem 0;
}

.sushi-counter__icon {
  display: flex;
  filter: invert(100%);
}

.delete-icon {
  position: absolute;
  top: 25px;
  right: 0;
  cursor: pointer;

  @include media-breakpoint-down(md) {
    top: 85px;
  }

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.total {
  margin-top: 2rem;

  & span {
    color: #000;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  & p {
    color: #121212;
    line-height: 20px;
    letter-spacing: 0.48px;
    max-width: 22.5rem;
    margin-top: 2.5rem;
    margin-left: 1rem;
    position: relative;
  }

  & p::before {
    content: "*";
    position: absolute;
    top: 2px;
    left: -16px;
  }
}

.basket-font {
  font-size: 0.81rem
}

.basket-btns {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
}

.home-enter-active, .home-leave-active {
  transition: all 0.5s ease;
}

.home-enter, .home-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

</style>
