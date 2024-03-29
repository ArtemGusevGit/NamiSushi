<script setup>
import { useStore } from '@nuxtjs/composition-api'
import { computed } from 'vue'
import VTitle from '~/components/ui/VTitle.vue'
import VCardBtn from '~/components/ui/VCardButton.vue'
import VHeaderBtn from '~/components/ui/VHeaderButton.vue'
import fovoriteIcon from '~/assets/icons/favorite-active-icon.svg'
import fovoriteDisabledIcon from '~/assets/icons/favorite-icon.svg'
import removeIcon from '~/assets/icons/remove-icon.svg'
import addIcon from '~/assets/icons/add-icon.svg'
import deleteIcon from '~/assets/icons/delete-icon.png'

const store = useStore()
const sushiListBascet = computed(() => store.getters.getSushiBusketList)
const totalCostInBasket = computed(() => store.getters.getTotalCostInBasket)

const toggleSidebar = () => {
  store.commit('toggleSidebar')
}

const toggleOrderingMenu = () => {
  store.commit('toggleOrderingMenu')
}

const addSushiToBascet = (index) => {
  store.commit('addSushiToBasketById', index)
}

const removeSushiFromBasket = (index) => {
  store.commit('removeSushiFromBasketById', index)
}

const removeAllSushiFromBasketById = (index) => {
  store.commit('removeAllSushiFromBasketById', index)
}

const changeFavoriteStatus = (index) => {
  store.commit('toggleFavoriteSushiById', index)
}
</script>

<template>
  <div>
    <VTitle>Корзина</VTitle>
    <div
      v-if="!sushiListBascet.length"
      class="basket-list"
    >
      Ваша корзина пуста 🙄
    </div>
    <div
      v-else
      class="basket-list"
    >
      <TransitionGroup name="home">
        <div
        v-for="sushi in sushiListBascet"
        :key="sushi.id"
        class="sushi-item"
      >
        <div class="flex">
          <img
            :src="sushi.img"
            alt="sushiImg"
            class="sushi-img"
          >
          <div class="sushi-item__desc">
            <img
              class="sushi-icon"
              alt="fovoriteIcon"
              :src="sushi.favorite? fovoriteIcon : fovoriteDisabledIcon"
              @click="changeFavoriteStatus(sushi.id)"
            >
            <span class="sushi-title">{{ sushi.name }}</span>
            <span>{{ sushi.description }}</span>
            <span>({{ sushi.weight }} г)</span>
          </div>
        </div>
        <div class="sushi-item__actions">
          <div><span class="basket-font">Цена</span> {{ sushi.cost }} &#8381</div>
          <div class="sushi-counter">
            <VHeaderBtn
              rounded
              icon
              secondary
              @click="removeSushiFromBasket(sushi.id)"
            >
              <img
                class="sushi-counter__icon"
                :src="removeIcon"
                alt="removeIcon"
              >
            </VHeaderBtn>
            <span>
              {{ sushi.count }}
            </span>
            <VHeaderBtn
              rounded
              icon
              secondary
              @click="addSushiToBascet(sushi.id)"
            >
              <img
                class="sushi-counter__icon"
                :src="addIcon"
                alt="removeIcon"
              >
            </VHeaderBtn>
          </div>
          <div>
            <span class="basket-font">Сумма</span>
            {{ sushi.count * sushi.cost }} &#8381
          </div>
        </div>
        <img
          :src="deleteIcon"
          alt="deleteIcon"
          class="delete-icon"
          @click="removeAllSushiFromBasketById(sushi.id)"
        >
        </div>
      </TransitionGroup>
    </div>
    <div
      v-if="sushiListBascet.length"
      class="total"
    >
      <span>Общая сумма {{ totalCostInBasket }} &#8381</span>
      <p>Сумма заказа для доставки курьером должна составлять не менее 500 ₽</p>
    </div>
    <div class="basket-btns">
      <VCardBtn
        white
        @click="toggleSidebar"
      >
        Вернуться к попкупкам
      </VCardBtn>
      <VCardBtn
        v-if="sushiListBascet.length"
        @click="toggleOrderingMenu"
      >
        Оформить заказ
      </VCardBtn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 38.3rem;
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

.basket-list {
  margin-top: 1.875rem;
}

.sushi-item {
  padding: 1rem;
  border-radius: 0.5rem;
  background: #FAFAFA;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  margin-top: 0.5rem;
  position: relative;

  @include media-breakpoint-down(md) {
    flex-direction: column;
  }
}

.sushi-img {
  width: 5rem;
  height: 5rem;
}

.sushi-item__desc {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  margin-left: 1.6rem;
  margin-right: 2rem;
  width: 13.1rem;
  color: #717171;
  font-size: 0.81rem;
  font-family: PTSansNarrow, sans-serif;

  @include media-breakpoint-down(md) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.sushi-title {
  color: $dark;
  line-height: 25px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: Neucha, sans-serif;
}

.sushi-icon {
  position: absolute;
  top: 3px;
  left: 150px;
  z-index: 999;
  cursor: pointer;

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.sushi-item__actions {
  text-wrap: nowrap;
  @include media-breakpoint-down(md) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @include media-breakpoint-down(sm) {
    margin: 0 auto;
  }
}

.sushi-counter {
  margin: 0.75rem 0;
}

.sushi-counter__icon {
  display: flex;
  filter: invert(100%);
}

.delete-icon {
  position: absolute;
  top: 25px;
  right: 0;
  cursor: pointer;

  @include media-breakpoint-down(md) {
    top: 85px;
  }

  @include media-breakpoint-down(sm) {
    display: none;
  }
}

.total {
  margin-top: 2rem;

  & span {
    color: #000;
    font-size: 1.25rem;
    letter-spacing: 1px;
  }

  & p {
    color: #121212;
    line-height: 20px;
    letter-spacing: 0.48px;
    max-width: 22.5rem;
    margin-top: 2.5rem;
    margin-left: 1rem;
    position: relative;
  }

  & p::before {
    content: "*";
    position: absolute;
    top: 2px;
    left: -16px;
  }
}

.basket-font {
  font-size: 0.81rem
}

.basket-btns {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
}

.home-enter-active, .home-leave-active {
  transition: all 0.5s ease;
}

.home-enter, .home-leave-active {
  opacity: 0;
  transform: translateX(30px);
}

</style>
