<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9"><Feed /></div>
        <div class="col-md-3"><FeedSidebar /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Feed from "@/components/feed/Feed.vue";
import FeedSidebar from "@/components/feed/FeedSidebar.vue";

@Options({
  components: {
    Feed,
    FeedSidebar,
  },
})
export default class Home extends Vue {}
</script>
