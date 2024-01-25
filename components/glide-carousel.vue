<template>
  <div :class="[carouselClass, { dark: darkSection }]" class="glide">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h2>{{ title }}</h2>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="btn glide__arrow glide__arrow--left" data-glide-dir="<">
          <img v-if="!darkSection" src="@/assets/img/sliders/arrow-right.png" />
          <img v-else src="@/assets/img/icons/arrow-right-white.svg" />
        </button>
        <button class="btn glide__arrow glide__arrow--right" data-glide-dir=">">
          <img v-if="!darkSection" src="@/assets/img/sliders/arrow-right.png" />
          <img v-else src="@/assets/img/icons/arrow-right-white.svg" />
        </button>
      </div>
    </div>

    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li
          class="glide__slide"
          v-for="(slide, index) in items"
          :key="carouselClass + slide.id + index"
        >
          <slot name="slide" :item="slide"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import Glide from '@glidejs/glide';

const props = defineProps({
  carouselClass: {
    type: String,
    required: true,
  },
  carouselOpts: Object,
  darkSection: Boolean,
  title: String,
  items: Object,
});

onMounted(() => {
  new Glide(`.${props.carouselClass}`, props.carouselOpts).mount();
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.glide.dark {
  h2 {
    color: $white;
  }
}

.glide__arrow--left {
  transform: rotate(180deg);
  margin-top: 4px;
}
</style>
