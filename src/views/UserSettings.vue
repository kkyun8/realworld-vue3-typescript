<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <list-errors errors="$ctrl.errors" class="ng-isolate-scope"
          ><ul class="error-messages ng-hide" ng-show="$ctrl.errors">
            <!-- ngRepeat: (field, errors) in $ctrl.errors -->
          </ul>
        </list-errors>

        <form
          ng-submit="$ctrl.submitForm()"
          class="ng-valid ng-valid-email ng-dirty ng-valid-parse"
        >
          <fieldset ng-disabled="$ctrl.isSubmitting">
            <fieldset class="form-group">
              <input
                class="form-control ng-pristine ng-untouched ng-valid ng-not-empty"
                type="text"
                placeholder="URL of profile picture"
                ng-model="$ctrl.formData.image"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-not-empty"
                type="text"
                placeholder="Username"
                ng-model="$ctrl.formData.username"
              />
            </fieldset>

            <fieldset class="form-group">
              <textarea
                class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty"
                rows="8"
                placeholder="Short bio about you"
                ng-model="$ctrl.formData.bio"
              >
              </textarea>
            </fieldset>

            <fieldset class="form-group">
              <input
                class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-email"
                type="email"
                placeholder="Email"
                ng-model="$ctrl.formData.email"
              />
            </fieldset>

            <fieldset class="form-group">
              <input
                class="form-control form-control-lg ng-valid ng-not-empty ng-dirty ng-valid-parse ng-touched"
                type="password"
                placeholder="New Password"
                ng-model="$ctrl.formData.password"
              />
            </fieldset>

            <button class="btn btn-lg btn-primary pull-xs-right" type="submit">
              Update Settings
            </button>
          </fieldset>
        </form>

        <!-- Line break for logout button -->
        <hr />

        <button class="btn btn-outline-danger" ng-click="$ctrl.logout()">
          Or click here to logout.
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class UserSettings extends Vue {}
</script>
