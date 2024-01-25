import { ofetch } from 'ofetch';
import { useMyIndexStore } from '~/store';
import { useMyToasterStore } from '~/store/toaster';
// import { useMyToasterStore } from "@/store/toaster";

export default defineNuxtPlugin((nuxtApp) => {
  const toaster = useMyToasterStore();
  const store = useMyIndexStore();
  const route = useRoute();
  const { culture } = storeToRefs(store);
  // const { $localePath } = useNuxtApp()

  globalThis.$fetch = ofetch.create({
    // baseURL: '',
    headers: {
      'X-Culture': <string>route.params.lang || 'en-US',
      'Access-Control-Allow-Origin': '*',
    },
    onRequest({ request, options }) {
      if (!request.toString().includes('_nuxt')) {
        options.baseURL = 'http://194.233.90.150:8001/api';
      }

      // if (!useCookie('current-lang').value) {
      //   useCookie('current-lang').value = 'en-US';
      // }
    },
    onResponse({ response }) {
      if (!response.ok) {
        if (response.status === 401) {
          // navigateTo($localePath('/login'))
        }
        for (const key in response._data.errors) {
          if (
            Object.prototype.hasOwnProperty.call(response._data.errors, key)
          ) {
            const error = response._data.errors[key];

            error.forEach((item: string) => {
              toaster.$state = {
                title: key,
                msg: item,
                icon: 'bi:sliders2-vertical',
                type: 'text-bg-danger',
              };
              toaster.showToaster();
            });
          }
        }
      }
    },
    onRequestError({ error, request, response, options }) {
      console.log('-=-----================> , dasd');

      console.error(error, request, response, options);
    },
  });
});
