<template>
  <h1 class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: -30px;
    height: 10px;
    width: 10px;
    transform: translateY(-50%);
    background-color: $dark;
    border-radius: 1rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -30px;
    height: 10px;
    width: 10px;
    transform: translateY(-50%);
    background-color: $dark;
    border-radius: 1rem;
  }

  @include media-breakpoint-down(xl) {
    font-size: 3rem;
  }

  @include media-breakpoint-down(sm) {
    font-size: 1.37rem;
  }
}
</style>
