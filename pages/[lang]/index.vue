<template>
  <!-- OffCanvas -->
  <div
    class="offcanvas w-100 offcanvas-contact-form"
    tabindex="-1"
    id="contactFormMobileOffcanvas"
    data-bs-backdrop="false"
    aria-labelledby="contactFormMobileOffcanvasLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn"
        @click="closeOffCanvasForm"
        aria-label="Close"
      >
        <img src="@/assets/img/arrow-down.svg" alt="Close Offcanvas" />
      </button>
    </div>
    <div class="offcanvas-body small">
      <ContactForm />
    </div>
  </div>

  <!-- Hero Banner -->
  <!-- Position Fixed at top -->
  <section class="banner">
    <div v-if="slider" class="carousel-banner z-0">
      <BannerCarousel :data="slider.items" />
    </div>
    <div class="container d-none d-lg-block">
      <div class="row justify-content-end align-items-center">
        <div class="col-lg-4 d-none d-lg-flex contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  </section>

  <SearchForm v-if="homeSettings?.enableSearch" />
  <!-- Popular Residence -->
  <section v-if="featuredCategories" class="popular-residence-wrapper">
    <div class="container">
      <ClientOnly>
        <GlideCarousel
          :key="featuredCategories.items.length"
          :title="featuredCategories.title!"
          carouselClass="popular-residence"
          :carouselOpts="residenceOptions"
          :items="featuredCategories.items"
        >
          <template v-slot:slide="slotProps">
            <ResidenceCard :data="slotProps.item" />
          </template>
        </GlideCarousel>
      </ClientOnly>
    </div>
  </section>

  <!-- Featured Off Plans -->
  <section v-if="featuredBlogs" class="featured-off-plans-wrapper my-5">
    <div class="container">
      <ClientOnly>
        <GlideCarousel
          :key="featuredBlogs.items.length"
          :title="featuredBlogs.title"
          carouselClass="featured-off-plans"
          :carouselOpts="featuredOffPlansOptions"
          :items="featuredBlogs.items"
        >
          <template v-slot:slide="slotProps">
            <FeaturedBlogCard :item="slotProps.item" :dark-section="false" />
          </template>
        </GlideCarousel>
      </ClientOnly>

      <div
        v-if="featuredBlogs.seeMoreLink"
        class="mt-5 d-flex justify-content-center"
      >
        <NuxtLink
          class="wide-btn btn btn-outline-primary mb-4"
          :to="featuredBlogs.seeMoreLink.navigateUrl"
          >{{ featuredBlogs.seeMoreLink.text }}</NuxtLink
        >
      </div>
    </div>
  </section>

  <!-- <services
    v-if="customSections"
    :content="customSections.items"
    :isHtml="true"
  /> -->

  <!-- Featured Off Plans -->
  <!-- <section v-if="featuredBlogs" class="blogs-wrapper">
    <div class="container">
      <GlideCarousel
        title="Featured Blog"
        :items="featuredBlogs"
        carouselClass="blogs"
        :dark-section="true"
        :carouselOpts="featuredOffPlansOptions"
      >
        <template v-slot:slide="slotProps">
          <featuredBlogCardVue
            :item="slotProps.img"
            :blog="true"
            :dark-section="true"
          />
        </template>
      </GlideCarousel>

      <div class="mt-5 d-flex justify-content-center">
        <button class="wide-btn btn btn-outline-success">See All</button>
      </div>
    </div>
  </section> -->
</template>

<script setup lang="ts">
import FeaturedBlogCard from '~/components/featured-blog-card.vue';
import GlideCarousel from '~/components/glide-carousel.vue';
import type { Settings } from '~/interfaces';
import { useMyHomePageStore } from '~/store/homePage';
import { useMyIndexStore } from '~/store/index';

const store = useMyIndexStore();
const { isLoading } = storeToRefs(store);

const homeStore = useMyHomePageStore();
const {
  slider,
  featuredCategories,
  featuredBlogs,
  customSections,
  searchBox,
  contactUsForm,
  metaTags,
  settings,
} = storeToRefs(homeStore);

const residenceOptions = {
  type: 'slider',
  startAt: 0,
  perView: 6,
  gap: 10,
  bound: true,
  breakpoints: {
    1024: {
      perView: 4,
    },
    600: {
      perView: 3,
    },
  },
};

const featuredOffPlansOptions = {
  type: 'slider',
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

const { $gsap, $bootstrap } = useNuxtApp();
const closeOffCanvasForm = () => {
  $gsap.to('#contactFormMobileOffcanvas', { opacity: 0, display: 'none' });
};

const setPageMeta = () => {
  if (!metaTags.value) return;
  else {
    useSeoMeta({
      title: () => metaTags.value!.title,
      twitterImage: () => metaTags.value!.metaImage,
      twitterImageAlt: () => metaTags.value!.metaImage,
      description: () => metaTags.value!.metaDescription,
      msapplicationTileImage: () => metaTags.value?.metaImage,
    });
    useHead({
      title: metaTags.value?.title,
      meta: [
        // { name: 'description', content: metaTags.value?.metaDescription },
        { name: 'keywords', content: metaTags.value?.metaKeywords },
        { name: 'content-type', content: metaTags.value?.metaType },
        // { name: 'twitter:image', content: metaTags.value?.metaImage },
        // { name: 'twitter:image:alt', content: metaTags.value?.metaImage },
        // { name: 'msapplication-TileImage', content: metaTags.value?.metaImage },
      ],
      link: [
        {
          rel: 'icon',
          href: metaTags.value?.siteIcon,
          type: 'image/x-icon',
        },
      ],
    });
  }
};

const createCarousel = () => {
  const myCarouselElement = document.querySelector('.carousel.slide');
  console.log(myCarouselElement);

  if (myCarouselElement) {
    if (homeSettings.value?.enableSliderAutoPlay) {
      $bootstrap.Carousel.getOrCreateInstance(myCarouselElement, {
        ride: 'carousel',
        interval: homeSettings.value.sliderAutoPlayTiming,
      }).cycle();
    } else {
      $bootstrap.Carousel.getOrCreateInstance(myCarouselElement);
    }
  }
};

const homeSettings: Ref<Settings | null> = ref(null);

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await homeStore.getHomePage();
    featuredBlogs.value = res.featuredBlogs;
    featuredCategories.value = res.featuredCategories;
    searchBox.value = res.searchBox;
    contactUsForm.value = res.contactUsForm;
    // enableSearch.value = res.enableSearch;
    customSections.value = res.customSections;
    slider.value = res.slider;
    metaTags.value = res.metaTags;
    homeSettings.value = res.settings;
    if (res.settings?.enableSliderAutoPlay) createCarousel();
    setPageMeta();
    console.log(res);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.log(error);
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/bootstrap.scss';

.banner {
  height: 100vh;
  min-height: 900px;
  // z-index: 1;
  overflow: hidden;
  position: relative;
  .row,
  .container {
    // height: 100%;
    position: relative;
    z-index: 2;
  }

  .row > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
  }
}

.popular-residence-wrapper {
  position: relative;
  // padding-top: 150px; // required to avoid overlapping
  background-color: white;
  padding: 50px 0;
  @include media-breakpoint-up(md) {
    border-top-left-radius: 225px; // required to show black bg before
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    z-index: -1;
  }
}

.blogs-wrapper {
  background-color: #1e1e1e;

  padding-top: 60px;
  padding-bottom: 160px;
}

.carousel-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  // height: calc(100vh - var(--vh-offset, 0px));
}
.contact-form {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, 50%);
}

.offcanvas-contact-form {
  height: calc(100vh - 150px) !important;
  border-top-left-radius: 15px;
}
</style>
