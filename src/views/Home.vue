<template>
  <div class="home-page">
    <div v-if="!isLogin" class="banner">
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
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import Feed from "@/components/feed/Feed.vue";
import FeedSidebar from "@/components/feed/FeedSidebar.vue";

export default defineComponent({
  components: {
    Feed,
    FeedSidebar,
  },
  name: "Home",
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.getters["user/isLogin"]);

    return { isLogin };
  },
});
</script>
