<script setup>
import { computed } from 'vue'
import { useStore } from '@nuxtjs/composition-api'
import VHeaderBtn from '~/components/ui/VHeaderButton.vue'
import VDrawer from '~/components/ui/VDrawer.vue'
import VToggleVue from '~/components/ui/VToggle.vue'
import VMobileMenu from '~/components/ui/VMobileMenu.vue'
import namiLogo from '~/assets/images/nami-logo.png'
import namiMobileLogo from '~/assets/images/nami-mobile-logo.png'
import phoneIcon from '~/assets/icons/phone-icon.svg'
import basketIcon from '~/assets/icons/basket-icon.svg'

const store = useStore()
const sushiListBascet = computed(() => store.getters.getSushiBusketList)

const toggleSidebar = () => {
  store.commit('toggleSidebar')
}
</script>

<template>
  <div>
    <header>
      <div class="relative container">
        <img
          class="header-logo"
          :src="namiLogo"
          alt="namiLgo"
        >
        <div class="header-actions">
          <div class="flex">
            <VToggleVue class="burger" />
            <img
              class="header-logo__mobile"
              :src="namiMobileLogo"
              alt="namiMobileLogo"
            >
          </div>
          <nav class="header-nav">
            <NuxtLink
              to="/"
              class="header-nav__item"
            >
              Меню
            </NuxtLink>
            <NuxtLink
              to="/delivery"
              class="header-nav__item"
            >
              Доставка
            </NuxtLink>
            <NuxtLink
              to="/promotion"
              class="header-nav__item"
            >
              Акции
            </NuxtLink>
            <NuxtLink
              to="/feedback"
              class="header-nav__item"
            >
              Отзыв
            </NuxtLink>
            <NuxtLink
              to="/contacts"
              class="header-nav__item"
            >
              Контакты
            </NuxtLink>
          </nav>
          <img
            class="header-logo__mobile-center"
            :src="namiMobileLogo"
            alt="namiMobileLogo"
          >
          <a
            href="tel:+79797009791"
            class="header-phone"
          >
            <img
              :src="phoneIcon"
              alt="phoneIcon"
            >
            <span>+7 979 700 97 91</span>
          </a>
          <div class="header-btns">
            <VHeaderBtn
              rounded
              icon
              @click="toggleSidebar"
            >
              <img
                class="flex"
                :src="basketIcon"
                alt="basketIcon"
              >
              <div
                v-if="sushiListBascet.length"
                class="bascet-alert"
              />
            </VHeaderBtn>
            <VHeaderBtn
              rounded
              class="login-btn"
            >
              Войти
            </VHeaderBtn>
          </div>
        </div>
      </div>
    </header>
    <VMobileMenu />
    <VDrawer />
  </div>
</template>

<style lang="scss" scoped>
header {
  background-color: #062D4E;
  color: $white;
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9998;
  min-width: 20rem;
}

.burger {
  display: none !important;

  @include media-breakpoint-down(xl) {
    display: flex !important;
  }
}

.header-logo {
  position: absolute;
  top: -32px;
  left: 0;

  @include media-breakpoint-down(xl) {
    display: none;
  }
}

.header-logo__mobile {
  display: none;
  margin-left: 1.25rem;

  @include media-breakpoint-down(xl) {
    display: flex;
  }

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.header-logo__mobile-center {
  display: none;

  @include media-breakpoint-down(sm) {
    display: flex;
  }
}

.header-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-phone {
  color: $white;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.125rem;
  transition: $transition-base;

  &:hover {
    color: $primary;
  }

  & span {
    @include media-breakpoint-down(sm) {
      display: none;
    }
  }
}

.header-nav {
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
  margin-left: 14rem;

  @include media-breakpoint-down(xl) {
    display: none;
  }
}

.header-btns {
  display: flex;
  gap: 1.5rem;

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.header-nav__item {
  position: relative;
  color: $white;

  &::after{
    content: '';
    width: 3px;
    height: 3px;
    background-color: $white;
    position: absolute;
    border-radius: 1rem;
    top: 10px;
    right: -20px;
  }

  &:last-child::after {
    display: none;
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

.login-btn {
  @include media-breakpoint-down(sm) {
      display: none;
    }
}

a.nuxt-link-exact-active {
  color: $primary;
  font-weight: bold;
}
</style>
