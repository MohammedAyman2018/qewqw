<template>
  <section class="listing-search">
    <SearchForm />
  </section>

  <section class="off-plans">
    <div class="container">
      <h3>{{ pageTitle }}</h3>
      <div v-if="listing.length > 0" class="row">
        <div
          class="col-lg-4 col-12 my-3"
          v-for="(item, index) in listing"
          :key="index"
        >
          <FeaturedBlogCard :item="item" />
        </div>
        <Pagination
          :perPage="10"
          :pageCount="totalPages"
          @pageChanged="getListing($event)"
        />
      </div>

      <p v-else class="text-center">No Result found</p>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useMyIndexStore } from '@/store/index';

const store = useMyIndexStore();
const route = useRoute();

const pageTitle = ref('');
const listing = ref([]);
const pageNumber = ref(0);
const totalCount = ref(0);
const totalPages = ref(0);

const getListing = async (pageNum?: number) => {
  const res = await store.searchListing(
    route.query.keyword
      ? (route.query.keyword as string)
      : (route.params.category as string),
    pageNum ? pageNum : undefined
  );

  pageNumber.value = res.data.pagedList.pageNumber;
  totalCount.value = res.data.pagedList.totalCount;
  totalPages.value = res.data.pagedList.totalPages;
  listing.value = res.data.pagedList.items;
  pageTitle.value = res.data.title;
};

onBeforeMount(async () => {
  if (route.params.type && route.params.category) {
    try {
      getListing();
    } catch (error) {
      console.log(error);
    }
  }
});

watch(
  () => route.query,
  () => {
    getListing();
  },
  { deep: true }
);
</script>
<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.listing-search {
  padding-top: 100px;
  background-color: #1e1e1e;
  margin-bottom: 50px;
}
.off-plans {
  margin-bottom: 150px;
}
footer {
  &::before {
    display: none !important;
  }
}
</style>
