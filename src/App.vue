<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <!-- TODO: login user -->
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <template v-if="!isLogin">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Sign in</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Sign up </router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/editor"
                ><i class="ion-compose"></i>&nbsp;New Article</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/settings"
                ><i class="ion-gear-a"></i> Settings</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/profile">
                <img
                  class="user-pic"
                  :src="userimage || 'https://api.realworld.io/images/smiley-cyrus.jpeg'"
                />
                {{ username }}</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <router-view />
    <footer>
      <div class="container">
        <router-link class="logo-font" to="/">conduit</router-link>
        <span class="attribution">
          © 2022. An interactive learning project from <a href="https://thinkster.io">Thinkster</a>.
          Code licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.getters["user/isLogin"]);
    const username = computed(() => store.state.user.userInfo.name);
    const userimage = computed(() => store.state.user.userInfo.image);
    return { isLogin, username, userimage };
  },
});
</script>
