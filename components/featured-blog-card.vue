<template>
  <NuxtLink
    :to="item.linkUrl"
    class="featured-plan"
    :class="{
      dark: darkSection,
    }"
    v-if="item"
    :key="item.linkUrl"
  >
    <img :src="item.thumbnailImage" class="img-fluid" alt="Riviera" />

    <header class="d-flex justify-content-between align-items-center my-3">
      <div>
        <h3 class="display-4 fw-bold mb-0 p-0">{{ item.title }}</h3>
      </div>
    </header>

    <div>
      <p class="text-secondary line-clamp-3">
        {{ item.summary }}
      </p>

      <!-- <div class="d-flex gap-5">
        <span class="text-success">{{
          $dayjs(item.creationDate).fromNow()
        }}</span>
        <span class="text-success">{{
          $dayjs(item.creationDate).format('D MMMM YYYY')
        }}</span>
      </div> -->
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
    width: 100%;
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
