import VueMultiselect from "vue-multiselect";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('VueMultiselect', VueMultiselect)
})