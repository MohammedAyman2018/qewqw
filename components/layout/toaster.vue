<template>
  <div class="toast-container top-0 start-50 translate-middle-x p-3">
    <div
      id="liveToast"
      :class="[toaster.type]"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <Icon class="align-middle" :name="toaster.icon"></Icon>

        <strong class="me-auto">{{ toaster.title }}</strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ toaster.msg }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyToasterStore } from '@/store/toaster';
// const colorMode = useColorMode();

const toaster = useMyToasterStore();
// const classList = computed(() => [
//   colorMode.preference === "dark" ? "text-bg-dark" : "",
// ]);
</script>

<style></style>
