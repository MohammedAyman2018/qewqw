<template>
  <section class="project-header">
    <div class="container">
      <h2 v-if="title">{{ title }}</h2>
    </div>
  </section>
</template>
<script lang="ts" setup>
    defineProps(['title']);
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.project-header {
  min-height: 250px;
  padding-top: 120px;
  position: relative;
  background: $semi-gray;
  .container {
    position: relative;
    z-index: 2;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 90%;
    background-color: #1e1e1e;
  }
  h2 {
    color: $white;
    margin-top: 15px;
  }
}
</style>
