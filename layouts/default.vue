<script setup>
import VHeader from '~/components/VHeader.vue'
import VFooter from '~/components/VFooter.vue'
</script>

<template>
  <div>
    <VHeader />
    <div class="main main-bg">
      <Nuxt />
    </div>
    <VFooter />
  </div>
</template>

<style lang="scss" scoped>
.main {
  padding: 10rem 0 7.5rem;
}

.main-bg {
  background-image: url('@/assets/images/BG-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
