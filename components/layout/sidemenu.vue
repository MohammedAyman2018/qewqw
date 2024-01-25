<template>
  <div
    class="offcanvas offcanvas-end d-lg-none"
    tabindex="-1"
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    v-if="data"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
        <NuxtLink class="navbar-brand mr-3" :to="`/${$route.params.lang}`">
          <img
            :src="data.header.logoUrl"
            alt="Masa Realty"
            width="100"
            height="32"
          />
        </NuxtLink>
      </h5>
      <button
        type="button"
        class="btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <Icon name="ant-design:menu-outlined" />
      </button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          v-for="menuLink in data.header.menus"
          :key="menuLink.title"
          class="nav-item"
        >
          <NuxtLink class="nav-link" aria-current="page" :to="menuLink.linkUrl">
            {{ menuLink.title }}
          </NuxtLink>
        </li>
      </ul>

      <div v-if="data.settings.showCallUs" class="btn-wrapper">
        <button
          class="btn btn-outline-primary"
          @click="store.callUsLoading ? null : store.callUs()"
        >
          {{ data.header.callUsLink.text }}
          <Icon name="ph:arrow-up-right-light" />
        </button>
      </div>

      <div class="d-flex gap-3 justify-content-end">
        <NuxtLink
          v-if="data.settings.showLogin"
          class="nav-link with-icon"
          aria-current="page"
          :to="data.header.signInLink.navigateUrl"
        >
          <Icon name="ant-design:user-outlined" />
          {{ data.header.signInLink.text }}
        </NuxtLink>
        <div>
          <NuxtLink
            class="nav-link with-icon"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Icon name="ant-design:global-outlined" />
            {{ data.header.selectedLanguage.shortName }}
          </NuxtLink>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li v-for="lang in data.header.languages" :key="lang.value">
              <button
                class="dropdown-item"
                @click="store.changeLang(lang.value)"
              >
                {{ lang.text }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMyIndexStore } from '~/store';
defineProps(['data']);
const store = useMyIndexStore();
</script>

<style scoped lang="scss">
.offcanvas-body {
  display: flex;
  justify-content: space-around;
  flex-direction: column;

  ul {
    width: 100%;
    padding-left: 50px;

    li {
      padding: 10px;
      border-bottom: 1px solid #ddd;

      a {
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        // padding-bottom: 20px;
        &.router-link-exact-active {
          color: black;
          border-bottom: 2px solid #fff;
          position: relative;

          &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: -50px;
            width: 30px;
            height: 30px;
            background-image: url('~/assets/img/arrow-down.svg');
            background-size: cover;
            background-position: center;
          }
        }
      }
    }
  }
  .btn-wrapper {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    // button {
    //   width: 100%;
    // }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 40px;
    font-size: 16px;
    a {
      text-decoration: none;
    }
  }
}
</style>
