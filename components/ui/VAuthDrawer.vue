<script setup>
import { useStore } from '@nuxtjs/composition-api'
import { computed } from 'vue'
import VTitle from '~/components/ui/VTitle.vue'
import VCardBtn from '~/components/ui/VCardButton.vue'

const store = useStore()
const isAuthMenuOpen = computed(() => store.getters.getAuthMenuStatus)

const toggleAuthMenu = () => {
  store.commit('toggleAuthMenu')
}
</script>

<template>
  <div>
    <div
      class="blur-overlay"
      :class="{'open': isAuthMenuOpen}"
      @click="toggleAuthMenu"
    />
    <div
      class="sidebar"
      :class="{'open': isAuthMenuOpen}"
    >
      <div class="auth-menu">
        <VTitle>Вход</VTitle>
        <div>Эта страница предназначена для авторизации 🥅</div>
        <VCardBtn @click="toggleAuthMenu">Вернуться на главную</VCardBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 28rem;
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

.auth-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}
</style>
