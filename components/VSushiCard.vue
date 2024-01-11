<script lang="ts" setup>
import { useStore } from '@nuxtjs/composition-api'
import VCardBtn from '~/components/ui/VCardButton.vue'
import VHeaderBtn from '~/components/ui/VHeaderButton.vue'
import fovoriteIcon from '~/assets/icons/favorite-active-icon.svg'
import fovoriteDisabledIcon from '~/assets/icons/favorite-icon.svg'
import removeIcon from '~/assets/icons/remove-icon.svg'
import addIcon from '~/assets/icons/add-icon.svg'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  weigth: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  isFavorite: {
    type: Boolean,
    required: true
  },
  isInBasket: {
    type: Boolean,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})

const store = useStore()

const changeFavoriteStatus = (index: number) => {
  store.commit('toggleFavoriteSushiById', index)
}

const addSushiToBascet = (index: number) => {
  store.commit('addSushiToBasketById', index)
}

const removeSushiFromBuscet = (index: number) => {
  store.commit('removeSushiFromBasketById', index)
}

</script>

<template>
  <div
    class="sushi-card"
    :class="{'sushi-card__basket': isInBasket}"
  >
    <div
      class="sushi-card__icon"
      @click="changeFavoriteStatus(id)"
    >
      <img
        v-if="isFavorite"
        alt="fovoriteIcon"
        :src="fovoriteIcon"
        :class="{ 'fill-white': isInBasket }"
      >
      <img
        v-else
        :src="fovoriteDisabledIcon"
        alt="fovoriteIcon"
        :style="{ filter: isInBasket ? 'invert(1)' : 'none' }"
      >
    </div>
    <div class="relative sushi-img-container">
      <img
        class="sushi-card__img"
        :src="img"
        :alt="name"
      >
      <div :class="{'shadow': isInBasket}" />
    </div>
    <div class="relative">
      <span class="sushi-card__name">{{ name }}</span>
      <span class="sushi-card__weigth">{{ weigth }} г</span>
    </div>
    <span
      class="sushi-card__desc"
      :class="{'sushi-card__basket': isInBasket}"
    >{{ description }}</span>
    <div class="card-actions">
      <span class="sushi-card__cost">{{ cost }} &#8381</span>
      <VCardBtn
        v-if="!count"
        @click="addSushiToBascet(id)"
      >
        В корзину
      </VCardBtn>
      <div v-else>
        <VHeaderBtn
          rounded
          icon
          @click="addSushiToBascet(id)"
        >
          <img
            class="flex"
            :src="addIcon"
            alt="removeIcon"
          >
        </VHeaderBtn>
        <span class="sushi-count">
          {{ count }}
        </span>
        <VHeaderBtn
          rounded
          icon
          @click="removeSushiFromBuscet(id)"
        >
          <img
            class="flex"
            :src="removeIcon"
            alt="removeIcon"
          >
        </VHeaderBtn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sushi-card {
  border-radius: 8px;
  background: #FAFAFA;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  padding: 1.87rem;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 16.8rem;
  height: 100%;
}

.sushi-card__icon {
  position: absolute;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 999;
}

.sushi-img-container {
  display: flex;
  justify-content: center;
}

.sushi-card__img {
  max-width: 8.125rem;
  max-height: 8.125rem;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  z-index: 999;
  // position: ;
}

.sushi-card__name {
  font-size: 1.18rem;
  text-transform: uppercase;
}

.sushi-card__weigth {
  position: absolute;
  top: 0;
  right: 0;
  color: $semi-dark;
  font-size: 0.81rem;
  font-family: Arial, sans-serif;
}

.sushi-card__desc {
  margin: 1.25rem 0 2.75rem;
  color: $semi-dark;
}

.card-actions {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}

.sushi-card__cost {
  font-size: 1.18rem;
}

.sushi-card__basket {
  background-color: $secondary;
  color: $white;
}

.shadow {
  &::before {
    content: "";
    position: absolute;
    bottom: 80px;
    right: 80px;
    opacity: 0.3;
    border-radius: 2rem;
    box-shadow: 0px 0px 30px 50px rgba(203, 182, 137, 0.99);
  }
}

.sushi-count {
  font-size: 1.187rem;
  margin: 0 0.81rem;
}
</style>
