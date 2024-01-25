export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from middleware');
  console.log(to.params);

  if (!to.params.lang) navigateTo('/en-US' + to.fullPath);

  return true;
});
