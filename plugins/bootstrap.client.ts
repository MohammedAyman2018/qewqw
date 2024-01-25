import { Modal, Toast, Carousel } from 'bootstrap';

export default defineNuxtPlugin(() => ({
  provide: {
    bootstrap: {
      Modal,
      Toast,
      Carousel,
    },
  },
}));
