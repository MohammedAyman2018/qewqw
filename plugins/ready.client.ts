import { useMyIndexStore } from '~/store/index';

export default defineNuxtPlugin(async (nuxtApp) => {
  const store = useMyIndexStore();
  const route = useRoute();
  const router = useRouter();
  if (!route.params.lang) router.push(`/en-US${route.fullPath}`);

  await useAsyncData(() => store.getGlobalSettings());
});
