<template>
  <section class="services" v-if="!isHtml">
    <div class="container">
      <div class="section-title">
        <legend>Services</legend>
        <h2>Your Trusted Real Estate Partner in Dubai</h2>
        <p>
          At Masa Realty, we understand that finding the perfect property in
          Dubai, whether for investment or a comfortable living space, is about
          more than just a transaction.
        </p>
      </div>
      <ul class="row">
        <li
          class="col-xl-4 col-lg-6 col-12"
          v-for="item in services"
          :key="item.id"
        >
          <div class="service-block">
            <img :src="item.icon" :alt="item.title" width="30" />
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  <section class="services" v-else v-html="content"></section>
</template>
<script setup>
import heart from '~/assets/img/icons/heart.svg';
let services = [
  {
    id: 1,
    title: 'Comfortable',
    desc: "Enjoy lifestyle amenities designed to provide every homeowners modern comfort, a stone's throw away from schools, churches, and hospitals.",
    icon: heart,
  },
  {
    id: 2,
    title: 'Extra security',
    desc: 'You can connect with potential tenants without having to share your phone number. We also require all users to register to validate their legitimacy.',
    icon: heart,
  },
  {
    id: 3,
    title: 'Luxury',
    desc: 'Find out how we provide the highest standard of professional property management to give you all the benefits of property.',
    icon: heart,
  },
  {
    id: 4,
    title: 'Best price',
    desc: 'Not sure what you should be charging for your property? Let us do the numbers for you—contact us today for a free rental appraisal on your home.',
    icon: heart,
  },
  {
    id: 5,
    title: 'Strategic location',
    desc: 'located in the city center close to the shopping center. Very good for areas surrounded by international education centers, start-up office centers.',
    icon: heart,
  },
  {
    id: 6,
    title: 'Efficient',
    desc: 'Schedule visits to multiple properties at once in one day without having to call them one by one. Check everything and find the best properties for rent',
    icon: heart,
  },
];

defineProps(['isHtml', 'content']);
</script>
<style lang="scss">
@import '~/assets/scss/variables.scss';
.section-title {
  margin: 30px 0;
  legand {
    font-size: 28px;
  }
  h2 {
    color: $dark;
    font-size: 48px;
    margin: 30px 0 20px 0;
    max-width: 600px;
    font-weight: bolder;
  }
  p {
    font-size: 22px;
    max-width: 1000px;
  }
}
section.services {
  margin: 50px 0;
  overflow: hidden;
  clear: both;
  ul {
    padding: 0;
    margin-top: 50px;
    li {
      list-style-type: none;
      &:nth-child(odd) {
        .service-block {
          background-color: $semi-gray;
          &:hover {
            background-color: $success;
          }
        }
      }
    }
  }
  .service-block {
    display: flex;
    flex-direction: column;
    padding: 25px;
    height: calc(100% - 25px);
    img {
    }
    h4 {
      color: $dark;
      font-size: 24px;
      margin: 20px 0;
    }
    p {
      font-size: 16px;
      color: 73788C;
    }
    &:hover {
      background-color: $success;
      img {
        filter: brightness(0) invert(1);
      }
      h4,
      p {
        color: $white;
      }
    }
  }
}
</style>
