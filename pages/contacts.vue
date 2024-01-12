<script setup>
import VTitle from '~/components/ui/VTitle.vue'
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api'
const title = ref('Контакты')

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
    <div>Свяжитесь с нами, чтобы узнать больше или просто поговорить - мы не кусаем! ☎️📧</div>
  </div>
</template>
