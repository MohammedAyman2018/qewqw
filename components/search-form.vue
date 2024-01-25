<template>
  <section v-if="globalSetting.enableSearch" class="general-search">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-10 col-12">
          <div
            class="search-form d-flex align-items-center justify-content-between bg-white"
          >
            <!-- <VueMultiSelect :options="options" /> -->
            <FormsInputWithIcon
              class="no-border w-100"
              v-model="data.name"
              :submitted="submitted"
              :errors="$v.name.$errors"
              :icon="{
                name: 'ph:magnifying-glass',
                color: 'black',
                size: '26px',
              }"
              :input="{
                type: 'text',
                placeholder: searchBox.placeholder,
                id: 'searchInput',
              }"
            />
            <button class="btn btn-primary" @click="submit()">
              {{ searchBox.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useMyIndexStore } from '~/store';

// const options = ['list', 'of', 'options'];
const route = useRoute();

const validations = {
  name: {
    required,
  },
};

const data = reactive({
  name: '',
});

const store = useMyIndexStore();
const { searchBox, globalSetting } = storeToRefs(store);

onMounted(() => {
  data.name = (route.query.keyword as string) || <string>route.params.category;
});

const $v = useVuelidate(validations, data);
const router = useRouter();
const submitted = ref(false);
const submit = async () => {
  submitted.value = true;
  const isFormCorrect = await $v.value.$validate();
  if (!isFormCorrect) return;
  router.push(
    `/${route.params.lang}/search/search-text?propertytype=1&keyword=${data.name}`
  );
};
</script>
<style lang="scss">
@import '~/assets/scss/variables.scss';

.general-search {
  background-color: #1e1e1e;
  padding: 40px 0;
}

.search-form {
  background-color: $white;
  padding: 0 20px;
  height: 67px;
  border-radius: 10px;

  button {
    height: 43px;
    width: 144px;
  }
}

.no-border {
  input {
    border: none !important;
    gap: 0;
  }
}
</style>
