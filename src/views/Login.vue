<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ t("signIn") }}</h1>
          <p class="text-xs-center">
            <router-link to="/register">{{ t("needAnAccount") }}</router-link>
          </p>
          <ul v-if="hasError" class="error-messages">
            <li v-for="message in messages" :key="message">{{ message }}</li>
          </ul>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import LoginForm from "@/components/auth/LoginForm.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginForm,
  },
  setup() {
    const store = useStore();
    store.commit("common/setDefaultState", { root: true });

    const hasError = computed(() => store.state.common.hasError);
    const messages = computed(() => store.state.common.messages);
    const t = computed(() => store.state.common.t);

    return {
      t,
      hasError,
      messages,
    };
  },
});
</script>
