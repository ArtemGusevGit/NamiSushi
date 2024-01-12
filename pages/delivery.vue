<script setup>
import VTitle from '~/components/ui/VTitle.vue';
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api';

const title = ref('Доставка');

useMeta(() => ({
  title: title.value,
}));
</script>

<script>
export default defineComponent({
  head: {},
});
</script>

<template>
  <div class="container">
    <VTitle>{{ title }}</VTitle>
    <div>Мы привезем вам ваш заказ со скоростью света! 🎇🚀</div>
  </div>
</template>
