<template>
  <header>
    <nav v-if="data.header" class="navbar navbar-expand-lg z-1">
      <div class="container">
        <NuxtLink class="navbar-brand mr-3" :to="`/${route.params.lang}`">
          <img
            :src="data.header.logoUrl"
            alt="Masa Realty"
            width="100"
            height="32"
          />
        </NuxtLink>
        <button
          v-if="data.settings.showNavigationMenu"
          class="navbar-toggler text-white d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <Icon name="ant-design:menu-outlined" />
        </button>

        <LayoutSidemenu :data="data" />

        <div class="collapse navbar-collapse d-none d-lg-flex">
          <ul v-if="data.header.menus" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              v-for="menuLink in data.header.menus"
              :key="menuLink.title"
              class="nav-item"
            >
              <NuxtLink
                class="nav-link"
                aria-current="page"
                :to="menuLink.linkUrl"
              >
                {{ menuLink.title }}
              </NuxtLink>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li v-if="data.settings.showLogin" class="nav-item">
              <NuxtLink
                class="nav-link with-icon"
                aria-current="page"
                :to="data.header.signInLink.navigateUrl"
              >
                <Icon name="ant-design:user-outlined" />
                {{ data.header.signInLink.text }}
              </NuxtLink>
            </li>
            <li v-if="data.settings.allowMultiLanguages" class="nav-item">
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
                  <button class="dropdown-item" @click="store.changeLang(lang)">
                    {{ lang.text }}
                  </button>
                </li>
              </ul>
            </li>
            <li v-if="data.settings.showCallUs" class="nav-item">
              <button
                class="btn btn-outline-info"
                @click="store.callUsLoading ? null : store.callUs()"
              >
                {{ data.header.callUsLink.text }}
                <Icon name="ph:arrow-up-right-light" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { useMyIndexStore } from '~/store';
defineProps(['data']);
const route = useRoute();
const store = useMyIndexStore();
</script>

<style lang="scss" scoped>
@import '~/assets/scss/bootstrap.scss';
header {
  position: absolute;
  z-index: 3;
  width: 100%;
}
nav {
  margin-top: 30px;
  height: 66px;

  .container {
    position: relative;
    @include media-breakpoint-up(lg) {
      &:after {
        background: $white;
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 10px;
        left: 0;
      }
    }

    // padding: 15px 0;
    display: flex;
    align-items: stretch;
    justify-content: left;
    .navbar-toggler {
      // scale: 1.4;
      border: 0;
      box-shadow: none;
      outline: 0;
      margin-bottom: 20px;
    }
    .navbar-nav {
      height: 100%;

      .nav-item {
        position: relative;
        &:first-child {
          margin-left: 30px;
        }

        &:not(:last-child) {
          margin-right: 30px;
        }
        a {
          &:not(.btn) {
            height: 100%;
            padding-bottom: 30px;
          }
          display: flex;
          align-items: center;
          color: white;
          text-decoration: none;
          // padding-bottom: 20px;
          &.router-link-exact-active,
          &:hover {
            color: white;
            border-bottom: 3px solid #fff;
          }
        }
        button {
          transform: translateY(-10%);
          // margin-bottom: 20px;
        }
        .nav-link.with-icon {
          display: flex;
          gap: 5px;
        }
      }
      .dropdown-menu {
        padding-bottom: 0;
      }
    }
  }

  .navbar-brand {
    margin-bottom: 20px;
    transform: translateY(-10%);
    img {
      width: auto;
      height: 50px;
    }
  }
}
</style>
