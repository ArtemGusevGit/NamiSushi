<script setup>
import VTitile from '~/components/ui/VTitile.vue'
import deliveryIcon from '~/assets/icons/delivery-icon.svg'
import bagIcon from '~/assets/icons/bag-icon.svg'
import checkIcon from '~/assets/icons/check-icon.svg'

</script>

<template>
  <div>
    <VTitile class="order-title">
      Оформление заказа
    </VTitile>
    <div class="order-delivery">
      <div class="order-delivery__title">
        <div class="order-delivery__title-number">
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
          <span class="delivery-text">Курьер</span>
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

.test {
  z-index: 99999999;
}

.order-delivery {
  margin-top: 1.7rem  ;
  padding: 1.25rem;
  border-radius: 0.5rem;
  background-color: $white;
  font-family: Ubuntu, sans-serif;
  font-size: 1.37rem;

  &__title {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
}

.order-delivery__title-number {
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

.delivery-methods {
  margin-left: 2rem;
  margin-top: 0.5rem;
  font-size: 1.125rem;
  color: #A5A5A5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.delivery-method {
  display: grid;
  align-items: center;
  grid-template-columns: 0.2fr 0.2fr 1fr 1fr;
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
  margin-left: 2.5rem;
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
</style>
