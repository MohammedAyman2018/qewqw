<template>
  <NuxtLink :to="data.linkUrl" class="residence">
    <img :src="data.thumbnailImage" class="img-fluid" :alt="data.title" />
    <p>{{ data.title }}</p>
    <span class="text-body-secondary">{{ data.summary }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps(['data']);
</script>

<style lang="scss" scoped>
.residence {
  text-decoration: none;
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 160px;
    aspect-ratio: 160.46/164.2;
  }

  p {
    padding: 0;
    margin: 0;
  }
}
</style>
