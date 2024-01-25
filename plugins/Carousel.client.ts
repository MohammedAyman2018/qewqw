// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {

        // nuxtApp.vueApp.component('VueCarousel', Carousel)
        // nuxtApp.vueApp.component('VueSlide', Slide)
        // nuxtApp.vueApp.component('VuePagination', Pagination)
        // nuxtApp.vueApp.component('VueNavigation', Navigation)
    }
})
