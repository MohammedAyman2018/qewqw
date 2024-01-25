<template>
  <NuxtLink
    :to="`/blogs/`"
    class="featured-plan"
    :class="{
      dark: darkSection,
    }"
    v-if="item"
    :key="item.id"
  >
    <img :src="item.featuredImage" class="img-fluid" alt="Riviera" />

    <header class="d-flex justify-content-between align-items-center my-3">
      <div>
        <h3 class="display-4 fw-bold mb-0 p-0">{{ item.titleCMSName }}</h3>
        <span class="display-4 text-body-secondary">Dubai</span>
      </div>

      <p class="text-success display-3 fw-bold">120,000$</p>
    </header>

    <div>
      <p class="text-secondary line-clamp-3">
        {{ item.contentCMSName }}
      </p>

      <div class="d-flex gap-5">
        <span class="text-success">Studio 1, 2</span>
        <span class="text-success">3-bedroom</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  item: Object,
  darkSection: Boolean,
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.featured-plan {
  text-decoration: none;
  img {
    aspect-ratio: 386.13/193.11;
    border-radius: 10px;
    object-fit: cover;
    min-height: 200px;
  }

  &.dark {
    h3 {
      color: $white;
    }
    .text-secondary {
      color: #adadad !important;
    }
  }
}
</style>
