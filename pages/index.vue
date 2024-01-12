<script setup>
import { useStore } from '@nuxtjs/composition-api';
import { computed } from 'vue';
import VSushiList from '~/components/VSushiFilter.vue';
import VTitle from '~/components/ui/VTitle.vue';
import VSushiCard from '~/components/VSushiCard.vue';
import { ref, useMeta, defineComponent } from '@nuxtjs/composition-api';

const store = useStore();
const sushiList = computed(() => store.getters.getSushiList);
const title = ref('Меню');

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
    <VSushiList />
    <div class="sushi-list">
      <div v-for="(sushi, index) in sushiList" :key="index">
        <VSushiCard
          :id="sushi.id"
          :name="sushi.name"
          :cost="sushi.cost"
          :description="sushi.description"
          :weigth="sushi.weight"
          :is-favorite="sushi.favorite"
          :is-in-basket="sushi.addToBascet"
          :count="sushi.count"
          :img="sushi.img"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-bg {
  background-image: url('@/assets/images/BG-main.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.sushi-list {
  display: flex;
  gap: 1.875rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
