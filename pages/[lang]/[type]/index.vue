<template>
  <PageHeader
    :class="{ thanksheader: slug === 'thank-you' }"
    :title="slug == 'thank-you' ? '' : page?.title"
  />
  <section v-if="page && slug != 'thank-you'" v-html="page.content"></section>
  <section v-if="slug === 'thank-you'" class="thank-you mb-5">
    <div class="container">
      <!-- <Icon name="icon-park-twotone:success" /> -->
      <div class="img-container">
        <img src="@/assets/img/icons/patch-check.svg" alt="" />
      </div>
      <h1>
        Thank You! <br />
        Your Request Was Sent
      </h1>
      <p>Our team members will contact you within 24 hours.</p>
      <NuxtLink
        class="btn btn-primary mt-3 mb-4 px-5"
        :to="`/${$route.params.lang}`"
      >
        Back
      </NuxtLink>
    </div>
  </section>
  <!-- <section class="about-hero">
    <ClientOnly>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/img/about/about-hero.jpg"
              alt="alt"
              class="img-fluid"
            />
            <div class="container">
              <div
                class="h-100 d-flex align-items-center justify-content-center"
              >
                <div class="row align-items-center justify-content-center">
                  <div class="col-lg-10 col-12 text-center">
                    <h1 class="display-1 fw-bold lh-base">
                      Choose Masa Realty for unparalleled expertise
                    </h1>
                    <p class="display-3 fw-bold lh-sm">
                      Personalized service, ensuring a trusted and successful
                      real estate journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
  <section class="mission">
    <div class="mission-container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <img
            src="@/assets/img/about/mission.jpg"
            alt="alt"
            class="img-fluid h-100"
          />
        </div>
        <div class="col-lg-8 col-12 d-flex flex-column p-3">
          <div class="row px-3">
            <div class="col-lg-10 col-12 mission-title">
              <h4>About us</h4>
              <h2>We're on a Mission to Change View of RealEstate Field.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed
                eiusmod tempor incididunt ut labore et dolore.enim admix minim
                veniam quis nostrud.
              </p>
            </div>
            <div class="col-lg-5 col-12">
              <div class="mission-card">
                <img
                  src="@/assets/img/about/house.svg"
                  alt="alt"
                  class="img-fluid"
                />
                <h5>Modern Villa</h5>
                <p>When unknown printer took galley of type and scrambled.</p>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="mission-card">
                <img
                  src="@/assets/img/about/money.svg"
                  alt="alt"
                  class="img-fluid"
                />
                <h5>Secure Payment</h5>
                <p>When unknown printer took galley of type and scrambled.</p>
              </div>
            </div>
          </div>

          <a href="#" class="learn-more mt-5">
            <Icon name="material-symbols:arrow-right-alt-rounded" />

            Learn More</a
          >
        </div>
      </div>
    </div>
  </section>
  <section class="main-focus">
    <div class="container">
      <div class="col-12 mission-title text-center">
        <h4>our services</h4>
        <h2>Our Main Focus</h2>
      </div>
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="focus-card mb-4 rounded-2">
            <img src="@/assets/img/about/buy.svg" alt="alt" class="img-fluid" />
            <h4>Buy a Home</h4>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <a href="#" class="link">
              Find A Home <Icon name="material-symbols:arrow-right-alt-rounded"
            /></a>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="focus-card mb-4 rounded-2">
            <img
              src="@/assets/img/about/rent.svg"
              alt="alt"
              class="img-fluid"
            />
            <h4>Rent a Home</h4>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <a href="#" class="link">
              Find A Home
              <Icon name="material-symbols:arrow-right-alt-rounded" />
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="focus-card mb-4 rounded-2">
            <img
              src="@/assets/img/about/sell.svg"
              alt="alt"
              class="img-fluid"
            />
            <h4>Sell a Home</h4>
            <p>
              over 1 million+ homes for sale available on the website, we can
              match you with a house you will want to call home.
            </p>
            <a href="#" class="link">
              Find A Home
              <Icon name="material-symbols:arrow-right-alt-rounded" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="statistics">
    <div class="container">
      <div class="row">
        <div class="col stats-block">
          <img src="@/assets/img/about/construction.svg" alt="" />
          <h2>260+</h2>
          <p>Total Construction</p>
        </div>
        <div class="col stats-block">
          <img src="@/assets/img/about/rooms.svg" alt="" />
          <h2>110+</h2>
          <p>Apartio Rooms</p>
        </div>
        <div class="col stats-block">
          <img src="@/assets/img/about/apartments.svg" alt="" />
          <h2>190+</h2>
          <p>Apartments Sold</p>
        </div>
        <div class="col stats-block">
          <img src="@/assets/img/about/area.svg" alt="" />
          <h2>560+</h2>
          <p>Total Area Sq</p>
        </div>
      </div>
    </div>
  </section> -->
</template>

<script lang="ts" setup>
import { useMyDetailsPageStore } from '~/store/details';
import { useMyIndexStore } from '~/store/index';
import { useRoute } from 'vue-router';
import PageHeader from '~/components/layout/page-header.vue';
const store = useMyIndexStore();
const { isLoading } = storeToRefs(store);
const detailStore = useMyDetailsPageStore();
let page: any = ref(null);
let slug: any;
onBeforeMount(async () => {
  const route = useRoute();
  slug = route.params.type;
});
onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await detailStore.getPage(slug);
    page.value = res?.data;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/bootstrap.scss';

.slide {
  width: 100vw;
  // height: calc(100vh - var(--vh-offset, 0px));
  height: 900px;
  background-color: $primary;
  .carousel-inner,
  .carousel-item,
  .carousel-item img {
    height: 100%;
  }

  .carousel-item img {
    width: 100%;
    height: 900px;
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
      display: block;
      align-items: center;
      text-align: center;
      @include media-breakpoint-up(lg) {
        text-align: center;
      }
    }
  }
}

.mission-container {
  background-color: $white;
  box-shadow: 8px 10px 20px 1px rgba(152, 152, 152, 0.16);
  margin-inline-end: 12%;
  border-radius: 0 47px 47px 0;
  min-height: 400px;
  margin-top: -100px;
  position: relative;
  z-index: 2;
  margin-bottom: 50px;
  @include media-breakpoint-down(md) {
    margin-inline-end: 0;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
  }
  @include media-breakpoint-down(sm) {
    margin-inline-end: 0;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
  }
}

.mission-title {
  margin: 30px 0;
  h4 {
    color: $success;
    font-size: 18px;
  }
  h2 {
    font-size: 46px;
    color: $dark;
    font-weight: bold;
  }
}

.mission-card {
  img {
  }
  h5 {
    margin-top: 15px;
    font-weight: 600;
  }
}

.main-focus {
  margin-bottom: 100px;
  .focus-card {
    text-align: center;
    background-color: $white;
    box-shadow: 8px 10px 20px 1px rgba(152, 152, 152, 0.16);
    padding: 30px;
    p {
      color: #7c8893;
    }
    a {
      transition: all 0.2s ease-in;
      svg {
        margin: 0;
        transition: all 0.2s ease-in;
      }
    }
    &:hover {
      h4,
      .link {
        color: $success;
        svg {
          margin-inline-start: 5px;
        }
      }
    }
  }
}

.statistics {
  background-color: $dark;
  color: $white;
  padding: 60px 0;
  padding-bottom: 160px;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: $dark;
  }
  img {
  }
  h2 {
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 50px;
    letter-spacing: 0.4px;
    margin: 15px 0;
  }
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    color: #7c8893;
  }
}

.learn-more {
  color: $success;
  transition: all 0.2s ease-in;
  margin: 0;
  &:hover {
    margin-inline-start: 5px;
  }
}

.thanksheader {
  min-height: inherit;
  padding-top: 100px;
}

.thank-you {
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  text-align: center;
  .img-container {
    background-color: rgba($gray, 0.5);
    width: 175px;
    height: 175px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    img {
    }
  }
  svg,
  path {
    width: 130px;
    font-size: 130px;
    fill: $success;
  }
  h1 {
    font-size: 32px;
    margin: 20px 0;
  }
  p {
    font-size: 16px;
  }
}
</style>
