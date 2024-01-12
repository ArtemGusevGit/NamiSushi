<script setup>
import VTitle from '~/components/ui/VTitle.vue'
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api'
const title = ref('Акции')

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
    <div>Не пропустите нашу акцию - смех и скидки гарантированы! 😄🎉</div>
  </div>
</template>
