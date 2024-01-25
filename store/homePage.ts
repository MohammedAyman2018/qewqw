import { defineStore } from 'pinia';
import type { IHomePageResponse } from '~/interfaces';

export const useMyHomePageStore = defineStore({
  id: 'myHomePageStore',
  state: (): IHomePageResponse => ({
    slider: null,
    featuredCategories: null,
    featuredBlogs: null,
    customSections: null,
    searchBox: null,
    contactUsForm: null,
    metaTags: null,
    settings: null,
  }),
  actions: {
    getHomePage() {
      return new Promise<IHomePageResponse>((resolve, reject) => {
        $fetch<IHomePageResponse>('/HomePage/GetContentArea')
          .then((data) => resolve(data))
          .catch((err) => reject(err));
      });
    },
  },
});
