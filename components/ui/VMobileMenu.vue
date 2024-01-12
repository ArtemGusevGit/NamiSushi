<script setup>
import { useStore } from "@nuxtjs/composition-api";
import { computed } from "vue";
import VHeaderBtn from "~/components/ui/VHeaderButton.vue";

const store = useStore();
const isMobileMenuOpen = computed(() => store.getters.getMobileMenuStatus);
const sushiListBascet = computed(() => store.getters.getSushiBusketList);

const toggleMobileMenu = () => {
  store.commit("toggleMobileMenu");
};

const toggleSidebar = () => {
  store.commit("toggleSidebar");
};
</script>

<template>
  <div>
    <div
      class="blur-overlay"
      :class="{ open: isMobileMenuOpen }"
      @click="toggleMobileMenu"
    />
    <div class="sidebar" :class="{ open: isMobileMenuOpen }">
      <nav class="mobile-nav" @click="toggleMobileMenu">
        <NuxtLink to="/" class="mobile-nav__item"> Меню </NuxtLink>
        <NuxtLink to="/delivery" class="mobile-nav__item"> Доставка </NuxtLink>
        <NuxtLink to="/promotion" class="mobile-nav__item"> Акции </NuxtLink>
        <NuxtLink to="/feedback" class="mobile-nav__item"> Отзыв </NuxtLink>
        <NuxtLink to="/contacts" class="mobile-nav__item"> Контакты </NuxtLink>
      </nav>
      <div class="header-btns">
        <VHeaderBtn rounded icon @click="toggleSidebar">
          <span>Корзина</span>
          <div v-if="sushiListBascet.length" class="bascet-alert" />
        </VHeaderBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 15rem;
  background-color: #062d4e;
  color: $secondary;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  z-index: 8888;
  padding: 2.5rem 2.5rem 2.81rem 2.81rem;
}

.blur-overlay {
  transform: translateX(100%);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(60, 75, 97, 0.6);
  backdrop-filter: blur(11px);
  opacity: 0;
  z-index: 8887;
}

.blur-overlay.open {
  opacity: 1;
}

.sidebar.open {
  transform: translateX(0);
  transition: transform 0.3s ease;
}

.blur-overlay.open {
  transform: translateX(0);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
}

.mobile-nav__item {
  position: relative;
  color: $white;

  &::after {
    content: "";
    width: 3px;
    height: 3px;
    background-color: $white;
    position: absolute;
    border-radius: 1rem;
    top: 8px;
    left: -10px;
  }
}

a.nuxt-link-exact-active {
  color: $primary;
  font-weight: bold;
}

.header-btns {
  display: none;
  margin-top: 1rem;

  @include media-breakpoint-down(sm) {
    display: flex;
    float: right;
  }
}

.bascet-alert {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: red;
  top: 5px;
  right: 8px;
  border-radius: 1rem;
}
</style>
