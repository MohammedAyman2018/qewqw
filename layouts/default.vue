<template>
  <div>
    <div v-if="isLoading" class="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <Toaster />
    <Navbar :data="{ header, settings }" />
    <slot />
    <Footer :data="{ footer, settings }" />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '~/components/layout/navbar.vue';
import Toaster from '~/components/layout/toaster.vue';
import Footer from '~/components/layout/footer.vue';
import { useMyIndexStore } from '~/store';
import { storeToRefs } from 'pinia';

const footer = ref();
const header = ref();
const settings = ref();

const store = useMyIndexStore();
const { isLoading } = storeToRefs(store);

onMounted(async () => {
  isLoading.value = true;
  try {
    const res = await store.getLayout();
    footer.value = res?.data?.footer;
    header.value = res?.data?.header;
    settings.value = res?.data?.settings;

    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    console.log(error);
  }
});
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.loading {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $info;
}
</style>
