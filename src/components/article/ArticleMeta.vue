<template>
  <div v-if="user" class="article-meta">
    <!-- TODO: user  -->
    <router-link to="/profile"
      ><img
        alt="author image"
        :src="user.image ? user.image : 'https://api.realworld.io/images/smiley-cyrus.jpeg'"
    /></router-link>
    <div class="info">
      <router-link to="/profile" class="author"> {{ user.name }} </router-link
      ><span class="date"> {{ updatedAt }} </span>
      <!-- TODO: Date type -> November 24, 2021 -->
    </div>
    <!-- TODO: hide heart button -->
    <div v-if="isLogin" class="pull-xs-right">
      <!-- TODO: add heart count value > -->
      <button class="btn btn-sm btn-outline-primary"><i class="ion-heart"></i> 1</button>
    </div>
  </div>
  <!-- TODO: add Follow & Favorite Article Buttons-->
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ArticleMeta",
  props: {
    user: {
      type: Object,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();

    const isLogin = computed(() => store.getters["user/isLogin"]);
    return { isLogin };
  },
});
</script>
