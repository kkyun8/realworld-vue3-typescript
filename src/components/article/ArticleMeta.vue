<template>
  <app-article-meta
    ><div class="article-meta">
      <!-- TODO: user  -->
      <router-link to="/profile"
        ><img
          alt="author image"
          ng-src="https://api.realworld.io/images/demo-avatar.png"
          src="https://api.realworld.io/images/demo-avatar.png"
      /></router-link>
      <div class="info">
        <router-link to="/profile" class="author"> Gerome </router-link
        ><span class="date"> November 24, 2021 </span>
      </div>
      <!-- TODO: hide heart button -->
      <app-favorite-button class="pull-xs-right"
        ><button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i> 821
        </button></app-favorite-button
      >
    </div></app-article-meta
  >
  <!-- TODO: add Follow & Favorite Article Buttons-->
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ArticleMeta extends Vue {}
</script>
