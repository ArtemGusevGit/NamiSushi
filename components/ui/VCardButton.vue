<script setup>
const props = defineProps({
  white: {
    type: Boolean,
    required: false
  }
})


const emit = defineEmits()
const handleClick = () => emit('click')

</script>

<template>
  <button
    :class="{'bg-white':white}"
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
}

.bg-white {
  background-color: $white;
  color: $dark;
}
</style>
