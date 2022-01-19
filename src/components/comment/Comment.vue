<template>
  <!----><app-article-comment
    ><div class="card">
      <div class="card-block">
        <p class="card-text">
          If someone else has started working on an implementation, consider jumping in and helping
          them! by contacting the author.
        </p>
      </div>
      <div class="card-footer">
        <router-link class="comment-author" to="/profile"
          ><img
            alt="author image"
            class="comment-author-img"
            src="https://api.realworld.io/images/demo-avatar.png"
        /></router-link>
        &nbsp; <router-link class="comment-author" to="/profile"> Gerome </router-link
        ><span class="date-posted"> November 24, 2021 </span
        ><span class="mod-options" hidden=""><i class="ion-trash-a"></i></span>
      </div></div
  ></app-article-comment>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Comment extends Vue {}
</script>
