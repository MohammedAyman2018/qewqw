<template>
  <section class="project-header">
    <div class="container">
      <h2>Ellington Beach House</h2>
      <div class="row">
        <div class="col-lg-8 col-12"></div>
        <div class="col-lg-4 col-12"></div>
      </div>
    </div>
  </section>
  <main>
    <section class="project-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12"></div>
          <div class="col-lg-4 col-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
    <!-- Featured Off Plans -->
    <section class="featured-off-plans-wrapper my-5">
      <div class="container">
        <GlideCarousel
          title="Similar Off Plans"
          carouselClass="featured-off-plans"
          :carouselOpts="featuredOffPlansOptions"
        >
          <template v-slot:slide="slotProps">
            <FeaturedPlanCard :img="slotProps.img" />
          </template>
        </GlideCarousel>
      </div>
    </section>
  </main>
</template>
<script lang="ts" setup>
const featuredOffPlansOptions = {
  type: "slider",
  startAt: 0,
  perView: 3,
  gap: 23,
  bound: true,
  breakpoints: {
    1024: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.project-header {
    min-height: 400px;
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
    height: 80%;
    background-color: #1e1e1e;
  }
  h2 {
    color: $white;
  }
}
main {
    background: $semi-gray;
    padding-top: 15px;
    padding-bottom: 50px;
}
.featured-off-plans-wrapper {

}
</style>