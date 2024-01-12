<script setup>
import VTitle from '~/components/ui/VTitle.vue'
import deliveryIcon from '~/assets/icons/delivery-icon.svg'
import bagIcon from '~/assets/icons/bag-icon.svg'
import checkIcon from '~/assets/icons/check-icon.svg'
import VInput from '~/components/ui/VInput.vue'
import userIcon from '~/assets/icons/user-icon.svg'
import phoneIcon from '~/assets/icons/phone-input-icon.svg'
import infoIcon from '~/assets/icons/information-icon.svg'
import VCardBtn from '~/components/ui/VCardButton.vue'
import { useStore, ref, computed } from '@nuxtjs/composition-api'

const name = ref('')
const phone = ref('')
const info = ref('')
const store = useStore()
const totalCostInBasket = computed(() => store.getters.getTotalCostInBasket)

const toggleSidebar = () => {
  store.commit('toggleSidebar')
  store.commit('toggleOrderingMenu')
  store.commit('clearBasket')
}

const onSubmit = async () => {
  payload = {
    name: name.value,
    phone: phone.value,
    info: info.value
  }
  //send payload to the server 🎇
};
</script>

<template>
  <div>
    <VTitle class="order-title">
      Оформление заказа
    </VTitle>
    <div class="order-box">
      <div class="order-point">
        <div class="order-point__number">
          1
        </div>
        <div>Способ доставки</div>
      </div>
      <div class="delivery-methods">
        <div class="delivery-method">
          <div class="delivery-circle" />
          <img
            :src="deliveryIcon"
            alt="deliveryIcon"
          >
          <span class="delivery-text__disabled">Курьер</span>
          <span class="delivery-status">Временно недоступно</span>
        </div>
        <div class="delivery-method">
          <div class="self-delivery-circle">
            <img
              class="check-icon"
              :src="checkIcon"
              alt="checkIcon"
            >
          </div>
          <img
            :src="bagIcon"
            alt="bagIcon"
          >
          <span class="delivery-text">Самовывоз</span>
          <div class="self-delivery-status">
            <div>Скидка - 10% </div>
            <div class="statis-subtitle">
              на стоиомость покупки
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-box">
      <div class="order-point">
        <div class="order-point__number">
          2
        </div>
        <div>Данные для доставки</div>
      </div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form class="order-form" @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="Имя"
            v-slot="{ errors, valid }"
            rules="required|max:25"
          >
            <VInput
              v-model="name"
              placeholder="Имя"
              type="text"
              :valid="valid"
              :inputIcon="userIcon"
              :error-message="errors"
            />
          </ValidationProvider>
          <ValidationProvider
            name="Телефон"
            v-slot="{ errors, valid }"
            rules="required|numeric|max:12|min:3"
          >
            <VInput
              v-model="phone"
              placeholder="Телефон"
              type="text"
              :valid="valid"
              :inputIcon="phoneIcon"
              :error-message="errors"
            />
          </ValidationProvider>
          <ValidationProvider
            name="Дополнительная информация"
            v-slot="{ errors, valid }"
            rules="max:150"
          >
            <VInput
              v-model="info"
              placeholder="Дополнительная информация"
              type="text"
              :valid="valid"
              :inputIcon="infoIcon"
              :error-message="errors"
            />
          </ValidationProvider>
        </form>
      </ValidationObserver>
    </div>
    <div class="order-box">
      <div class="order-prices">
        <span class="order-price bordered">
          Cтоимость товаров <strong class="price">{{ totalCostInBasket }}  &#8381</strong>
        </span>
        <span class="order-price">
          <strong>Итого к оплате</strong>
          <strong class="price">{{ totalCostInBasket }}  &#8381</strong>
        </span>
      </div>
      <VCardBtn
        fullWidth
        orderBtn
        @click="toggleSidebar"
      >
        Купить и оплатить
      </VCardBtn>
      <span class="order-info">
        Создавая заказ, вы соглашаетесь
        <a
          href="https://vodnik.ru/article/personaldata"
          target="_blank"
          class="order-link">
          <br class="text-break"/>
          с политикой обработки персональных данных
        </a>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.order-title {
  font-size: 2rem;
  text-align: center;

  @include media-breakpoint-down(sm) {
    font-size: 1.37rem;
  }
}

.order-box {
  margin-top: 1.7rem  ;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: $white;
  font-family: Ubuntu, sans-serif;
  font-size: 1.37rem;

  @include media-breakpoint-down(sm) {
    padding: 1.3rem;
  }
}

.order-point {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  &__number {
    position: relative;
    font-size: 1.25rem;
    z-index: 2;
    color: $white;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2rem;
    width: 2rem;
    transform: translate(-50%,-50%);
    background-color: #D34A44;
    border-radius: 1rem;
    z-index: -1;
    }
  }
}

.delivery-methods {
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #A5A5A5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @include media-breakpoint-down(sm) {
    margin-left: 0.5rem;
  }
}

.delivery-method {
  display: grid;
  align-items: center;
  grid-template-columns: 0.2fr 0.2fr 1fr 1fr;

  @include media-breakpoint-down(sm) {
    grid-template-columns: 1fr 1fr;
  }
}

.delivery-circle {
  content: "";
  height: 2rem;
  width: 2rem;
  border: 1px solid #A5A5A5;
  border-radius: 1rem;
  margin-right: 1.25rem;
}

.self-delivery-circle {
  content: "";
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  background-color: #0ACF83;
  border-radius: 1rem;
  margin-right: 1.25rem;
  position: relative;
}

.check-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

.delivery-text {
  color: #222;
  margin-left: 2.5rem;

  @include media-breakpoint-down(sm) {
    margin-left: 0rem;
  }
}

.delivery-text__disabled {
  color: #A5A5A5;
  margin-left: 2.5rem;

  @include media-breakpoint-down(sm) {
    margin-left: 0rem;
  }
}

.self-delivery-status {
  color: #3F4871;
  font-size: 0.87rem;
  font-weight: 700;
}

.delivery-status {
  color: #F00;
  font-size: 0.75rem;
}

.statis-subtitle {
  font-size: 0.5rem;
}

.order-form {
  margin-left: 2rem;
  margin-top: 0.5rem;
  margin-right: 3rem;

  @include media-breakpoint-down(sm) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.order-prices {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: 0.5rem;
  color: #222;
  font-family: Ubuntu, sans-serif;
  font-size: 18px;
  font-weight: 300;
  gap: 1.25rem;

  @include media-breakpoint-down(sm) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.order-price {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 1.25rem;
  margin-right: 3rem;

  @include media-breakpoint-down(sm) {
    margin-right: 0rem;
  }
}

.bordered {
  border-bottom: 1px solid #D9D9D9;
}

.order-info {
  margin-top: 1.125rem;
  font-family: Ubuntu, sans-serif;
  font-size: 0.75rem;
  font-weight: 300;

  & a {
    color: #185598;
    border-bottom: 1px solid #185598;
  }
}

.price {
  @include media-breakpoint-down(sm) {
    margin-left: auto;
  }
}

.text-break {
  display: none;
  @include media-breakpoint-down(sm) {
    display: flex;
  }
}
</style>
