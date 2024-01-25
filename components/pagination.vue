<template>
  <paginate
    :page-count="pageCount"
    :prev-text="'<'"
    :next-text="'>'"
    :click-handler="clickCallback"
    :container-class="'pagination my-5'"
  >
    <template #prev-text>
      <Icon name="ic:baseline-keyboard-arrow-left" />
    </template>

    <template #next-text>
      <Icon name="ic:baseline-keyboard-arrow-right" />
    </template>
  </paginate>
</template>
<script lang="ts" setup>
const emit = defineEmits(['pageChanged']);
// @ts-ignore
import Paginate from 'vuejs-paginate-next';

defineProps(['perPage', 'pageCount']);
const clickCallback = async (pageNum: number) => {
  emit('pageChanged', pageNum);
};
</script>
<style lang="scss">
@import '~/assets/scss/variables.scss';
</style>
