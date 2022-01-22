<template>
  <form>
    <fieldset>
      <fieldset class="form-group">
        <input
          placeholder="Email"
          type="text"
          v-model="input.email"
          class="form-control form-control-lg"
          required
          :disabled="isLoading"
        />
      </fieldset>
      <fieldset class="form-group">
        <input
          placeholder="Password"
          type="password"
          v-model="input.password"
          class="form-control form-control-lg"
          required
          :disabled="isLoading"
        />
      </fieldset>
      <button
        type="submit"
        @click.prevent="submit"
        :disabled="submitDisabled"
        class="btn btn-lg btn-primary pull-xs-right"
      >
        Sign in
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "@/store";
import { ILogin } from "@/types/user";

export default defineComponent({
  name: "LoginForm",
  setup() {
    const store = useStore();

    const input = reactive<ILogin>({
      email: "",
      password: "",
    });

    const submitDisabled = computed(() => !input.email || !input.password);
    const isLoading = computed(() => store.state.common.isLoading);

    async function submit() {
      const { email, password } = input;
      store.commit("user/setLogin", { email, password });
      await store.dispatch("user/login");
    }

    return {
      isLoading,
      input,
      submit,
      submitDisabled,
    };
  },
});
</script>
