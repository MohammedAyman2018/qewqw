<template>
  <section class="project-header" v-if="details">
    <div class="container">
      <h2 v-if="details.title">{{ details.title }}</h2>
      <div class="highlights">
        <ul>
          <!-- <li>
            <Icon name="mdi:map-marker" />
            Dubai
          </li> -->
          <li v-if="details.creationDate">
            <Icon name="mdi:calendar-month-outline" />
            {{ details.creationDate }}
          </li>
        </ul>
      </div>
      <div class="row mt-3">
        <!-- <div class="col-12">
          <div class="img-container h-100 pb-2">
            <img
              :src="details.metaImage"
              class="img-fluid h-100 w-100 rounded-3"
              alt=""
            />
          </div>
        </div> -->
        <!-- <div class="col-lg-4 col-12 d-flex justify-content-between flex-column">
          <div class="img-container my-2">
            <img
              src="@/assets/img/project/p2.png"
              class="img-fluid w-100"
              alt=""
            />
          </div>
          <div class="img-container my-2">
            <img
              src="@/assets/img/project/p3.png"
              class="img-fluid w-100"
              alt=""
            />
          </div>
        </div> -->
      </div>
    </div>
  </section>
  <main v-if="details">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- <div
              class="highlights dark-color bg-white mb-4 py-4 px-4 rounded-4"
            >
              <ul class="d-flex align-items-center justify-content-between">
                <li>
                  <Icon name="mingcute:grid-fill" />
                  2400 Square Feet
                </li>
                <li>
                  <Icon name="material-symbols:directions-car-rounded" />
                  2 Garages
                </li>
                <li>
                  <Icon name="cil:bathroom" />
                  8 Bathrooms
                </li>
                <li>
                  <Icon name="mdi:bed" />
                  20 Bedrooms
                </li>
              </ul>
            </div> -->
            <div
              v-html="details.content"
              class="project-details mb-4 bg-white py-4 px-4 rounded-4"
            ></div>
            <!-- <div class="project-details mb-4 bg-white py-4 px-4 rounded-4">
              <h3>Description</h3>
              <p>
                Capturing the essence and elegance of the sophisticated Beach
                House Ellington at Palm Jumeirah. Positioned to follow the solar
                pathway overhead, it offers panoramic views over the Dubai
                skyline and sunrises over the Gulf, inspired by its superyacht
                design.
              </p>
              <img
                src="@/assets/img/project/desc.png"
                class="img-fluid w-100"
                alt=""
              />
            </div>
            <div class="project-details bg-white mb-4 py-4 px-4 rounded-4">
              <h3>Location</h3>
              <ul>
                <li>
                  <label>Address:</label>
                  <span>3575 E Hidden Valley Dr</span>
                </li>
                <li>
                  <label>City:</label>
                  <span>Dubai</span>
                </li>
                <li>
                  <label>Area:</label>
                  <span>1Q12</span>
                </li>
                <li>
                  <label>Zip:</label>
                  <span>NV 89502</span>
                </li>
                <li>
                  <label>Country:</label>
                  <span>UAE</span>
                </li>
              </ul>
              <img
                src="@/assets/img/project/location.png"
                class="img-fluid w-100"
                alt=""
              />
            </div>
            <div class="project-details mb-4 bg-white py-4 px-4 rounded-4">
              <h3>Video</h3>
              <p>
                Capturing the essence and elegance of the sophisticated Beach
                House Ellington at Palm Jumeirah. Positioned to follow the solar
                pathway overhead, it offers panoramic views over the Dubai
                skyline and sunrises over the Gulf, inspired by its superyacht
                design.
              </p>
              <img
                src="@/assets/img/project/video.png"
                class="img-fluid w-100"
                alt=""
              />
            </div> -->
          </div>
          <!-- <div class="col-lg-4 col-12">
             <div
              class="highlights mb-4 dark-color bg-white py-4 px-4 rounded-4"
            >
              <ul class="d-flex align-items-center justify-content-between">
                <li class="tags">
                  <Icon name="lucide:tags" />
                  <div>
                    For Sale
                    <h3>120,000$</h3>
                  </div>
                </li>
              </ul>
              <a href="#" class="arrow-bar">
                <Icon name="bi:arrow-bar-right" />
              </a>
            </div> 
            <ContactForm />
          </div> -->
        </div>
      </div>
    </section>
    <!-- Featured Off Plans -->
    <!-- <section class="featured-off-plans-wrapper my-5">
      <div class="container">
        <GlideCarousel
          title="Similar Off Plans"
          carouselClass="featured-off-plans"
          :carouselOpts="featuredOffPlansOptions"
        >
          <FeaturedPlanCard
            v-for="item in 9"
            :key="item"
            :img="'https://placehold.co/600x400'"
          />
        </GlideCarousel>
      </div>
    </section> -->
  </main>
</template>
<script lang="ts" setup>
import { useMyDetailsPageStore } from '~/store/details';
import { useMyIndexStore } from '~/store/index';
import { useRoute } from 'vue-router';
const store = useMyIndexStore();
const { isLoading } = storeToRefs(store);
const detailStore = useMyDetailsPageStore();
let details: any = ref(null);
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

onMounted(async () => {
  isLoading.value = true;
  try {
    const route = useRoute();
    const slug = route.params.slug;
    const res = await detailStore.getDetails(slug);
    details.value = res?.data;
    isLoading.value = false;
  } catch (error) {
    console.log(error);
    isLoading.value = false;
  }
});
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.project-header {
  // min-height: 400px;
  min-height: 300px;
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
.highlights {
  position: relative;
  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    // margin-top: 10px;
    li {
      margin: 7px 0;
      margin-inline-end: 15px;
      color: $white;
      list-style-type: none;
      display: flex;
      align-items: center;
      svg {
        font-size: 22px;
        color: $success;
        margin-inline-end: 7px;
      }
      &.tags {
        font-size: 18px;
        svg {
          font-size: 36px;
        }
        h3 {
          color: $success;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 0;
        }
      }
    }
  }
  &.dark-color {
    min-height: 120px;
    display: flex;
    align-items: center;
    ul {
      width: 100%;
      li {
        color: $dark;
      }
    }
  }
  .arrow-bar {
    background-color: $success;
    position: absolute;
    width: 100px;
    height: 120px;
    right: 0;
    font-size: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
.project-details {
  p {
    color: $dark;
    font-size: 1.1rem;
    margin-top: 10px;
  }
  ul {
    display: flex;
    align-items: center;
    padding: 0;
    flex-wrap: wrap;
    li {
      // flex: 0 0 30%;
      list-style-type: none;
      font-size: 1rem;
      margin: 10px 0;
      margin-inline-end: 20px;
      min-width: 30%;
      label {
        font-weight: 600;
        margin-inline-end: 7px;
      }
      span {
      }
    }
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
