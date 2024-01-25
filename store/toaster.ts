import { defineStore } from 'pinia';
import { IToast } from '~/interfaces/index';

export const useMyToasterStore = defineStore({
  id: 'myToasterStore',
  state: (): IToast => ({
    title: '',
    icon: '',
    msg: '',
    type: '',
  }),
  actions: {
    showToaster() {
      const { $bootstrap } = useNuxtApp();
      const toastLiveExample = document.getElementById('liveToast');
      if (toastLiveExample) {
        const toastBootstrap =
          $bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        toastBootstrap.show();
      }
    },
  },
});
