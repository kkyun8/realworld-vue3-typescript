<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <!-- TODO: login user -->
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/login">Sign in</router-link></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register">Sign up </router-link>
          </li>
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
import { Options, Vue } from "vue-class-component";

export default class App extends Vue {}
</script>
<style lang="scss"></style>
