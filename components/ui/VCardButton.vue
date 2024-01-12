<script setup>
const props = defineProps({
  white: {
    type: Boolean,
    required: false,
  },
  type: String,
  fullWidth: Boolean,
  orderBtn: Boolean,
});

const emit = defineEmits();
const handleClick = () => emit('click');
</script>

<template>
  <button
    :type="type"
    :class="{
      'bg-white': white,
      'full-width': fullWidth,
      'order-btn': orderBtn,
    }"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  font-family: PTSansNarrow, sans-serif;
  background-color: $secondary;
  color: $white;
  padding: 0.5rem 1.94rem;
  font-size: 1rem;
  transition: $transition-base;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
  border: none;

  &:hover {
    font-weight: bold;
  }
}

.bg-white {
  background-color: $white;
  color: $dark;
}

.full-width {
  width: 100%;
}
.order-btn {
  border-radius: 0.5rem;
  border: 1px solid #0c334a;
  background: #0c334a;
}
</style>
