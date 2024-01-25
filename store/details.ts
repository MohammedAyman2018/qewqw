import { defineStore } from 'pinia';

export const useMyDetailsPageStore = defineStore({
  id: 'detailsPageStore',
  actions: {
    getDetails(slug: string | any) {
      return new Promise<{ data: any }>((resolve, reject) => {
        $fetch<{ data: any }>(`/DetailsPage/GetPost?slug=${slug}`)
          .then((data: any) => {
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },

    getPage(slug: string | any) {
      return new Promise<{ data: any }>((resolve, reject) => {
        $fetch<{ data: any }>(`/DetailsPage/GetPage?slug=${slug}`)
          .then((data: any) => {
            resolve(data);
          })
          .catch((err) => reject(err));
      });
    },
  },
});
