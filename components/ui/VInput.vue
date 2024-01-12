<script setup>
const props = defineProps({
  label: String,
  placeholder: String,
  errorMessage: Array,
  type: String,
  inputIcon: String,
  name: String,
  valid: Boolean,
});

const emit = defineEmits();
const updateValue = (event) => emit("input", event.target.value);
</script>

<template>
  <div class="custom-input">
    <div
      class="input-wrapper"
      :class="{ error: !valid && errorMessage.length }"
    >
      <img class="input-icon" :src="inputIcon" :alt="inputIcon" />
      <input type="type" :placeholder="placeholder" @input="updateValue" />
    </div>

    <div v-if="errorMessage">
      <div class="custom-input__error">{{ errorMessage[0] }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
input {
  padding-bottom: 0.4rem;
  transition: $transition-base;
  width: 100%;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  &:hover {
    // border: 2px solid $primary;
  }

  &::placeholder {
    color: #4c4c4c;
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: 300;
  }
}

.custom-input {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 24px;

  &__error {
    color: #f00;
    margin-top: 0.5rem;
    margin-right: 4rem;
    font-family: Ubuntu, sans-serif;
    font-size: 12px;
    font-weight: 300;
  }
}

.input-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
}

.error {
  border-bottom: 1px solid #f00;
}

.input-icon {
  padding-bottom: 0.4rem;
  margin-right: 1.3rem;
  margin-left: 0.3rem;
}
</style>
