<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <router-link to="/login">Have an account?</router-link>
          </p>
          <ul class="error-messages">
            <!-- TODO: form error-->
          </ul>
          <form novalidate="" class="ng-untouched ng-pristine ng-invalid">
            <fieldset>
              <fieldset class="form-group">
                <input
                  formcontrolname="username"
                  placeholder="Username"
                  type="text"
                  class="form-control form-control-lg ng-untouched ng-pristine ng-valid"
                /><!---->
              </fieldset>
              <fieldset class="form-group">
                <input
                  formcontrolname="email"
                  placeholder="Email"
                  type="text"
                  class="form-control form-control-lg ng-untouched ng-pristine ng-invalid"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  formcontrolname="password"
                  placeholder="Password"
                  type="password"
                  class="form-control form-control-lg ng-untouched ng-pristine ng-invalid"
                />
              </fieldset>
              <button type="submit" class="btn btn-lg btn-primary pull-xs-right" disabled="">
                Sign up
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Register extends Vue {}
</script>

<style></style>
