<script setup>
import VTitile from '~/components/ui/VTitile.vue'
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api'
const title = ref('Доставка')

useMeta(() => ({
  title: title.value
}))
</script>

<script>
export default defineComponent({
  head: {}
})
</script>

<template>
  <div class="container">
    <VTitile>{{ title }}</VTitile>
    <div>Мы привезем вам ваш заказ со скоростью света! 🎇🚀</div>
  </div>
</template>
