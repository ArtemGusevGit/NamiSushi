<script setup>
import { useStore } from "@nuxtjs/composition-api";
import { computed } from "vue";
import VOrder from "~/components/VOrder.vue";
import VBasket from "~/components/VBasket.vue";

const store = useStore();
const isSidebarOpen = computed(() => store.getters.getSidebarStatus);
const isOrderingMenuOpen = computed(() => store.getters.getOrderingMenuStatus);

const toggleSidebar = () => {
  store.commit("toggleSidebar");
};
</script>

<template>
  <div>
    <div
      class="blur-overlay"
      :class="{ open: isSidebarOpen }"
      @click="toggleSidebar"
    />
    <div class="sidebar" :class="{ open: isSidebarOpen }">
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
  background-color: #ebe1d7;
  color: $secondary;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  transform: translateX(100%);
  z-index: 9999;
  padding: 2.5rem 2.5rem 2.81rem 2.81rem;
  overflow-y: scroll;

  @include media-breakpoint-down(md) {
    width: 100%;
  }

  @include media-breakpoint-down(sm) {
    padding: 0.5rem;
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
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);
  opacity: 0;
  z-index: 9998;
}

.blur-overlay.open {
  opacity: 1;
}
</style>
