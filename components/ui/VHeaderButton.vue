<script lang="ts" setup>

const props = defineProps({
  rounded: {
    type: Boolean,
    required: false
  },
  icon: {
    type: Boolean,
    required: false
  },
  secondary: {
    type: Boolean,
    required: false
  }
})

type TEmits = {
  (e: 'click'): void
}

const emit = defineEmits<TEmits>()

const handleClick = () => emit('click')
</script>

<template>
  <button
    :class="[
      { rounded: rounded },
      { icon: icon },
      { secondary: secondary }
    ]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
  font-family: Neucha, sans-serif;
  background-color: $white;
  padding: 0.7rem 1.85rem;
  font-size: 1rem;
  transition: $transition-base;
  border: none;
  position: relative;
}

.rounded {
  border-radius: 10rem;
}

.icon {
  padding: 0.56rem;
}

.secondary {
  background-color: $secondary;
}
</style>
