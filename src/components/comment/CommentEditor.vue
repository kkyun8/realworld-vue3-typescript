<template>
  <div show-authed="true" style="display: inherit">
    <list-errors from="$ctrl.commentForm.errors" class="ng-isolate-scope"
      ><ul class="error-messages ng-hide" ng-show="$ctrl.errors">
        <!-- ngRepeat: (field, errors) in $ctrl.errors -->
      </ul>
    </list-errors>
    <form
      class="card comment-form ng-pristine ng-valid ng-submitted"
      ng-submit="$ctrl.addComment()"
    >
      <div class="card-block">
        <textarea
          class="form-control ng-pristine ng-valid ng-empty ng-touched"
          placeholder="Write a comment..."
          rows="3"
          ng-model="$ctrl.commentForm.body"
        >
        </textarea>
      </div>
      <div class="card-footer">
        <img
          ng-src="https://api.realworld.io/images/smiley-cyrus.jpeg"
          class="comment-author-img"
          src="https://api.realworld.io/images/smiley-cyrus.jpeg"
        />
        <button class="btn btn-sm btn-primary" type="submit">Post Comment</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class CommentEditor extends Vue {}
</script>
