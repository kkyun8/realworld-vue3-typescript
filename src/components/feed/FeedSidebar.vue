<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <div class="tag-list">
      <!-- TODO: v-for tags-->
      <a class="tag-default tag-pill"> implementations </a
      ><a class="tag-default tag-pill"> codebaseShow </a
      ><a class="tag-default tag-pill"> welcome </a
      ><a class="tag-default tag-pill"> introduction </a>
    </div>
    <div hidden="">Loading tags...</div>
    <div hidden="">No tags are here... yet.</div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FeedSidebar extends Vue {}
</script>
