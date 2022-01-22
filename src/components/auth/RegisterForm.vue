<template>
  <form>
    <fieldset>
      <fieldset class="form-group">
        <input
          placeholder="Username"
          type="text"
          v-model="input.name"
          class="form-control form-control-lg"
          required
          :disabled="isLoading"
        />
      </fieldset>
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
        Sign up
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "@/store";
import { IRegister } from "@/types/user";

export default defineComponent({
  name: "RegisterForm",
  setup() {
    const store = useStore();

    const input = reactive<IRegister>({
      name: "",
      email: "",
      password: "",
    });

    const submitDisabled = computed(() => !input.name || !input.email || !input.password);

    const messages = computed(() => store.state.common.messages);
    const isLoading = computed(() => store.state.common.isLoading);

    async function submit() {
      const { name, email, password } = input;
      store.commit("user/setRegister", { name, email, password });
      await store.dispatch("user/register");
    }

    return {
      isLoading,
      messages,
      input,
      submit,
      submitDisabled,
    };
  },
});
</script>
