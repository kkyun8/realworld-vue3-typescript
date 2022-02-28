<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>
        <ul v-if="hasError" class="error-messages">
          <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul>
        <SettingsForm />
        <hr />

        <button @click.prevent="logout" class="btn btn-outline-danger">
          Or click here to logout.
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "@/store";
import SettingsForm from "@/components/user_settings/SettingsForm.vue";

export default defineComponent({
  components: {
    SettingsForm,
  },
  name: "UserSetting",
  setup() {
    const store = useStore();
    store.commit("common/setDefaultState", { root: true });

    const hasError = computed(() => store.state.common.hasError);
    const messages = computed(() => store.state.common.messages);

    function logout() {
      store.dispatch("user/logout");
    }

    return { hasError, messages, logout };
  },
});
</script>
