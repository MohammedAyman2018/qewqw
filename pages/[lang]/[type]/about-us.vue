<template>
  <section>
    <h1>About page</h1>
  </section>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/bootstrap.scss';
.slide {
  width: 100vw;
  // height: calc(100vh - var(--vh-offset, 0px));
  height: 100%;
  background-color: $primary;
  .carousel-inner,
  .carousel-item,
  .carousel-item img {
    height: 100%;
  }

  .carousel-item img {
    width: 100%;
    object-fit: cover;
    filter: brightness(0.8);
    position: absolute;
  }

  .carousel-item {
    color: $white;
    .container {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      @include media-breakpoint-up(lg) {
        text-align: center;
      }
    }
  }
}
</style>
