<template>
  <PageHeader :title="'Thank You'" />
  <section class="thank-you h-75">
    <div class="container">
      <Icon name="icon-park-twotone:success" />
      <h1>
        Thank You! <br />
        Your Request Was Sent
      </h1>
      <p>Our team members will contact you within 24 hours.</p>
    </div>
  </section>
</template>
<script lang="ts" setup>
import PageHeader from '~/components/layout/page-header.vue';

</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
</style>
