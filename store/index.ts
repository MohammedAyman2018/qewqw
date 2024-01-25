import { defineStore } from 'pinia';
import countries from './countries';
import {
  type ContactUsReq,
  type IGlobalSettings,
  type IResponse,
} from '@/interfaces/index';
import type { ILayoutResponse } from '~/interfaces/layoutResponse';

export const useMyIndexStore = defineStore({
  id: 'myIndexStore',
  state: () => ({
    flags: countries,
    filterredFlags: countries,
    globalSetting: {} as IGlobalSettings,
    isLoading: true,
    callUsLoading: false,
    culture: 'en-US',
    subscribed: false,
    searchBox: {
      buttonText: '',
      placeholder: '',
    },
  }),
  actions: {
    searchFn(query: string) {
      this.filterredFlags = this.flags.filter(
        (country) =>
          country.label.toLowerCase().includes(query.toLowerCase()) ||
          country.dial_code.includes(query) ||
          country.value.toLowerCase().includes(query.toLowerCase())
      );
    },
    getLayout() {
      return new Promise<IResponse<ILayoutResponse>>((resolve, reject) => {
        $fetch<IResponse<ILayoutResponse>>('/SharedPage/GetLayout')
          .then((res) => {
            this.searchBox = res.data.header.searchBox;
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    getGlobalSettings() {
      if (localStorage && localStorage.getItem('masa-gs')) {
        return new Promise((resolve, _reject) => {
          this.globalSetting = JSON.parse(localStorage.getItem('masa-gs')!);
          this.setLang();
          resolve(true);
        });
      } else {
        return new Promise((resolve, reject) => {
          $fetch<IResponse<IGlobalSettings>>('/Settings/GetGlobal')
            .then((data) => {
              this.globalSetting = data.data;
              localStorage.setItem('masa-gs', JSON.stringify(data.data));
              this.setLang();
              resolve(data);
            })
            .catch((err) => reject(err));
        });
      }
    },

    async callUs() {
      try {
        this.callUsLoading = true;
        const res = await $fetch<{ data: string }>(
          '/SharedPage/RequestCallNumber'
        );
        const a = document.createElement('a');
        a.setAttribute('href', `tel:${res?.data}`);
        a.click();
        this.callUsLoading = false;
      } catch (error) {
        console.log(error);
        this.callUsLoading = false;
      }
    },

    changeLang(lang: any) {
      const route = useRoute();
      // console.log(route.params.lang);
      // console.log(lang);
      // route.params.lang = lang;
      let path: any = <string>route.fullPath;
      path = path.split('/');
      path[1] = lang.value;
      console.log(path);

      window.location = path.join('/');
    },
    setLang() {
      const route = useRoute();
      const lang = <string>route.params.lang || 'en-US';

      document.documentElement.setAttribute('lang', lang.split('-')[0]);

      document.dir = lang.toLowerCase() !== 'en-us' ? 'rtl' : 'ltr';
    },
    sendContactForm(data: ContactUsReq) {
      return new Promise((resolve, reject) => {
        $fetch('/HomePage/ContactUs', {
          method: 'POST',
          body: data,
        })
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    },

    subscribeToNewsletter(email: string) {
      return new Promise((resolve, reject) => {
        $fetch(`/SharedPage/SubscribeToNewsletter/${email}`, {
          method: 'POST',
        })
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    },

    searchListing(keyword: string, pageNumber = 1, pageSize = 9) {
      return new Promise<any>((resolve, reject) => {
        $fetch<any>(
          `/ListPage/SearchPaged?keyword=?${keyword}&pageNumber=${pageNumber}&pageSize=${pageSize}`
        )
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    },
  },
});
