<template>
  <form class="">
    <fieldset>
      <fieldset class="form-group">
        <input
          v-model="input.image"
          class="form-control"
          type="text"
          placeholder="URL of profile picture"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          v-model="input.name"
          class="form-control form-control-lg"
          type="text"
          placeholder="Username"
        />
      </fieldset>

      <fieldset class="form-group">
        <textarea
          v-model="input.description"
          class="form-control form-control-lg"
          rows="8"
          placeholder="Short bio about you"
        >
        </textarea>
      </fieldset>

      <fieldset class="form-group">
        <input
          v-model="input.email"
          class="form-control form-control-lg"
          type="email"
          placeholder="Email"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          v-model="input.password"
          class="form-control form-control-lg"
          type="password"
          placeholder="New Password"
        />
      </fieldset>

      <button @click.prevent="submit" class="btn btn-lg btn-primary pull-xs-right" type="submit">
        Update Settings
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { useStore } from "@/store";
import { IUserSettings } from "@/types/user";
import modal from "@/components/common/modal";

export default defineComponent({
  name: "SettingsForm",
  setup() {
    const store = useStore();

    const input = reactive<IUserSettings>({
      email: "",
      password: "",
      name: "",
      image: "",
      title: "",
      description: "",
    });

    onMounted(async () => {
      const { id } = store.state.user.loginUser;
      await store.dispatch("user/profile", id);
      const { email, name, image, title, description } = store.state.user.profile;
      input.email = email;
      input.name = name;
      input.image = image;
      input.title = title;
      input.description = description;
    });

    async function submit() {
      const isConfrim = await modal("UserSetting", "Are you sure you want to change it?", true)
        .then(() => true)
        .catch(() => false);

      if (!isConfrim) {
        return;
      }

      const { email, password, name, image, title, description } = input;
      await store.dispatch("user/updateSetting", {
        email,
        password,
        name,
        image,
        title,
        description,
      });
    }

    return { input, submit };
  },
});
</script>

<style></style>
