<template>
  <footer v-if="data.footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11 col-12">
          <div class="cons-form">
            <div class="row">
              <div class="col-lg-5 col-12">
                <ContactForm />
              </div>
              <div class="col-lg-7 col-12">
                <img
                  src="@/assets/img/footer-img.jpg"
                  class="img-fluid h-100 w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="data" class="footer-content">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-12 d-flex justify-content-start">
            <div class="footer-block">
              <img
                v-if="data.footer.logoUrl"
                style="width: auto; height: 50px"
                :src="data.footer.logoUrl"
                alt=""
              />
              <p v-if="data.settings.showFooterSeoText">
                {{ data.footer.seoText }}
              </p>
              <h3 v-if="data.footer.newsletterSection">
                {{ data.footer.newsletterSection.title }}
              </h3>
              <section v-if="data.footer.newsletterSection" class="form">
                <input
                  class="form-control"
                  type="email"
                  v-model="state.mail"
                  placeholder="Input your email"
                />
                <button
                  class="btn-success btn"
                  type="button"
                  style="box-shadow: 0px 0px 65px 0px #69b99d7a"
                  @click="subscribeToNewsLetter"
                >
                  Send
                </button>
              </section>
              <span
                v-if="
                  data.footer.newsletterSection && $v.mail.$errors.length > 0
                "
                class="text-danger"
                v-text="$v.mail.$errors[0].$message"
              />
            </div>
          </div>
          <div class="col-xl-8 col-12">
            <div class="row">
              <!-- Services Section-->
              <div
                v-if="data.footer.servicesSection"
                class="col-lg-4 col-12 d-flex justify-content-start"
              >
                <div class="footer-block">
                  <h3>{{ data.footer.servicesSection.title }}</h3>
                  <ul>
                    <li
                      v-for="link in data.footer.servicesSection.items"
                      :key="link.text"
                    >
                      <NuxtLink :to="link.navigateUrl">{{
                        link.text
                      }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Blogs Section -->
              <div
                v-if="data.settings.showFooterBlogs"
                class="col-lg-4 col-12 d-flex justify-content-start"
              >
                <div class="footer-block">
                  <h3>{{ data.footer.blogsSection.title }}</h3>
                  <ul>
                    <li
                      v-for="link in data.footer.blogsSection.items"
                      :key="link.text"
                    >
                      <NuxtLink :to="link.navigateUrl">{{
                        link.text
                      }}</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- contacts Section -->
              <div
                v-if="data.footer.contactsSection"
                class="col-lg-4 col-sm-6 col-12 d-flex justify-content-start"
              >
                <div class="footer-block">
                  <h3 class="capitalize">
                    {{ data.footer.contactsSection.title }}
                  </h3>
                  <ul>
                    <li
                      v-for="link in data.footer.contactsSection.items"
                      :key="link.text"
                    >
                      <NuxtLink
                        v-if="link.name !== 'CallUs'"
                        :to="link.navigateUrl"
                        v-text="link.text"
                      />
                      <NuxtLink
                        v-else
                        :disabled="store.callUsLoading"
                        class="cursor-pointer px-0"
                        @click="store.callUsLoading ? null : store.callUs()"
                        v-text="link.text"
                      />
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Social Section -->
              <div
                v-if="data.footer.socialMediaSection"
                class="col-lg-4 col-sm-6 col-12 d-flex justify-content-start"
              >
                <div class="footer-block">
                  <h3>{{ data.footer.socialMediaSection.title }}</h3>
                  <div class="footer-social">
                    <a
                      v-for="link in data.footer.socialMediaSection.items"
                      :key="link.icon"
                      class="icon"
                      :title="link.name"
                      :href="link.linkUrl"
                    >
                      <Icon :name="link.icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import { useMyIndexStore } from '~/store';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { useMyToasterStore } from '~/store/toaster';

defineProps(['data']);

const store = useMyIndexStore();
const toaster = useMyToasterStore();
const state = reactive({
  mail: '',
});

const validations = {
  mail: { email },
};

const $v = useVuelidate(validations, state);

const subscribeToNewsLetter = async () => {
  const isFormCorrect = await $v.value.$validate();
  if (!isFormCorrect) return;

  try {
    await store.subscribeToNewsletter(state.mail);
    toaster.$state = {
      title: 'Welcome to the Newsletter',
      msg: 'You are now subscribed to the Newsletter',
      icon: 'ph:newspaper-light',
      type: 'text-bg-success',
    };
    toaster.showToaster();
  } catch (error) {
    console.log(error);
  }
};
</script>
<style lang="scss">
@import '~/assets/scss/variables.scss';
@import '~/assets/scss/components/social';

footer {
  position: relative;
  margin-top: 100px;
  /*&::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
    z-index: -1;
  }*/

  border-radius: 108.351px 0px 0px 0px;
  background: linear-gradient(
    180deg,
    #35393e 0%,
    #31353a 6.25%,
    #050810 74.42%
  );
  padding-bottom: 80px;
  // margin-top: 150px;
  .cons-form {
    min-height: 200px;
    top: -100px;
    width: 100%;
    border-radius: 20px;
    background: $white;
    overflow: hidden;
    position: relative;
    filter: drop-shadow(14px 20px 17.1px rgba(0, 0, 0, 0.25));
  }
  .footer-block {
    margin-bottom: 30px;
    p {
      color: #73788c;
      margin-top: 20px;
      line-height: 1.6rem;
    }
    h3 {
      color: $success;
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: 500;
    }
    ul {
      padding: 0;
      &.multi {
        display: flex;
        flex-wrap: wrap;
        li {
          width: 50%;
        }
      }
      li {
        margin-top: 10px;
        list-style-type: none;
        a,
        button {
          text-decoration: none;
          color: #575757;
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: $success;
          }
        }
      }
    }
  }
  .form {
    display: flex;
    align-items: center;
    input[type='email'],
    .form-control {
      height: 43px;
      width: 100%;
      color: #575757;
      font-size: 14px;
      text-indent: 5px;
      outline: none;
      border-radius: 6px 0 0 6px;

      transition: all 0.2s ease-in-out;
      border: none;
      &:focus {
        border: 1px solid $success;
        transition: all 0.2s ease-in-out;
      }
    }
    .btn {
      margin: 0 auto;
      text-align: center;
      transition: all ease 0.5s;
      position: relative;
      background: $success;
      color: $white;
      height: 43px;
      border-radius: 0;
      width: 120px;
      font-size: 14px;
      border-radius: 0 6px 6px 0;
    }
    .btn:hover {
      opacity: 0.9;
    }
  }
}
</style>
