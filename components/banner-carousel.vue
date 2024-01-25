<template>
  <div id="homeBanner" class="carousel slide">
    <div v-if="data.length > 1" class="carousel-indicators">
      <button
        v-for="(indicator, index) in data"
        type="button"
        data-bs-target="#homeBanner"
        :data-bs-slide-to="index"
        class="active"
        :class="{
          active: index === 0,
        }"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    </div>

    <div class="carousel-inner">
      <div
        v-for="(bannerItem, index) in data"
        class="carousel-item"
        :class="{
          active: index === 0,
        }"
      >
        <img
          :src="bannerItem.thumbnailImage"
          :alt="bannerItem.title"
          class="img-fluid"
        />
        <div class="container">
          <div class="col-lg-7 col-12">
            <h1 v-if="bannerItem.title" class="display-1 fw-bold lh-base">
              {{ bannerItem.title }}
            </h1>
            <p v-if="bannerItem.summary" class="display-3 fw-bold lh-sm">
              {{ bannerItem.summary }}
            </p>

            <button
              class="d-lg-none btn btn-primary mx-5 my-2 py-2"
              @click="showOffCanvasForm"
            >
              Get free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp();

defineProps(['data']);

const showOffCanvasForm = () => {
  $gsap.to('#contactFormMobileOffcanvas', {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
  });
};
</script>

<style lang="scss">
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/bootstrap.scss';

.slide {
  width: 100vw;
  // height: calc(100vh - var(--vh-offset, 0px));
  height: 100%;
  background-color: $primary;
  .carousel-indicators {
    z-index: 3;
    button {
      width: 14px;
      height: 14px;
      border-radius: 50%;
    }
  }

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
        text-align: start;
      }
    }
  }
}
</style>
