<script setup>
import VTitle from '~/components/ui/VTitle.vue'
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api'
const title = ref('Отзывы')

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
    <VTitle>{{ title }}</VTitle>
    <div>Читайте, что говорят о нас наши довольные клиенты! 🐾🌟</div>
  </div>
</template>
