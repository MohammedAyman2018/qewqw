<template>
  <section v-if="contactUsForm" class="contact-form-wrapper bg-white">
    <div>
      <h2 class="display-2 fw-bold">{{ contactUsForm.title }}</h2>
      <p>
        {{ contactUsForm.description }}
      </p>
    </div>
    <div class="mb-3">
      <FormsInputWithIcon
        v-model="data.name"
        :submitted="submitted"
        :errors="$v.name.$errors"
        :icon="{
          name: 'ant-design:user-outlined',
          color: 'black',
          size: '20px',
        }"
        :input="{
          type: 'text',
          placeholder: contactUsForm.nameLabel,
          id: 'contactUsName',
        }"
      />
    </div>
    <div class="mb-3">
      <FormsInputWithIcon
        v-model="data.email"
        :submitted="submitted"
        :errors="$v.email.$errors"
        :icon="{
          name: 'mdi-light:email-open',
          color: 'black',
          size: '20px',
        }"
        :input="{
          type: 'email',
          placeholder: contactUsForm.emailLabel,
          id: 'contactUsEmail',
        }"
      />
    </div>

    <div class="mb-3">
      <FormsInputWithIcon
        v-model="data.number"
        :submitted="submitted"
        :errors="$v.number.$errors"
        :icon="null"
        :input="{
          type: 'text',
          placeholder: contactUsForm.mobileNumberLabel,
          id: 'phoneNumber ',
        }"
      >
        <template v-slot:icon>
          <ClientOnly>
            <VueMultiselect
              v-model="data.country"
              :options="filterredFlags"
              :internal-search="false"
              @search-change="store.searchFn"
              label="label"
              :allowEmpty="false"
              selectLabel=""
              selectedLabel=""
              deselectLabel=""
              track-by="value"
            >
              <template #singleLabel="props">
                <Icon
                  :name="'flag:' + props.option.value.toLowerCase() + '-4x3'"
                />
              </template>
              <template #option="props">
                <Icon
                  :name="'flag:' + props.option.value.toLowerCase() + '-4x3'"
                />
              </template>
            </VueMultiselect>
          </ClientOnly>
        </template>
      </FormsInputWithIcon>
    </div>

    <div>
      <FormsInputWithIcon
        v-model="data.message"
        :submitted="submitted"
        :errors="$v.message.$errors"
        :icon="{
          name: 'mdi:message-reply-text-outline',
          color: 'black',
          size: '20px',
        }"
        :input="{
          type: 'text',
          placeholder: contactUsForm.messageLabel,
          id: 'contactUsMessage ',
        }"
      />
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3">
      <button class="btn btn-primary" @click="submit()">
        {{ contactUsForm.buttonText }}
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, helpers } from '@vuelidate/validators';
import { useMyIndexStore } from '~/store';
import { useMyHomePageStore } from '~/store/homePage';
import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js';
import { useMyToasterStore } from '~/store/toaster';
const toaster = useMyToasterStore();
const router = useRouter();
const store = useMyIndexStore();
const homePageStore = useMyHomePageStore();
const { filterredFlags } = storeToRefs(store);
const { contactUsForm } = storeToRefs(homePageStore);

const data = reactive({
  name: '',
  email: '',
  message: '',
  number: '',
  country: {
    label: 'United Arab Emirates',
    dial_code: '+971',
    value: 'AE',
  },
});

const validations = {
  name: { required },
  email: { required, email },
  message: {
    required,
  },
  number: {
    required,
    validFormat: helpers.withMessage('Invalid phone number', (value: string) =>
      isValidPhoneNumber(value, data.country.value as CountryCode)
    ),
  },
  country: { required },
};

const $v = useVuelidate(validations, data);

const submitted = ref(false);
const submit = async () => {
  submitted.value = true;
  const isFormCorrect = await $v.value.$validate();
  if (!isFormCorrect) return;
  // actually submit form

  try {
    const res = await store.sendContactForm({
      countryCode: data.country.dial_code,
      email: data.email,
      fkType: 0,
      message: data.message,
      mobile: data.number,
      name: data.name,
    });
    toaster.$state = {
      title: 'We got your message',
      msg: 'We got your message',
      icon: 'clarity:success-standard-solid',
      type: 'text-bg-primary',
    };
    toaster.showToaster();
    console.log(res);
    router.push(`en/thank-you`);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped lang="scss">
.contact-form-wrapper {
  padding: 50px 30px;
  border-radius: 20px 0px 20px 20px;
  color: #000;
}
</style>
