<template>
  <app-article-preview
    ><div class="article-preview">
      <ArticleMeta />

      <router-link to="/article" class="preview-link"
        ><h1>Create a new implementation</h1>
        <p>join the community by creating a new implementation</p>
        <span>Read more...</span>
        <ul class="tag-list">
          <li class="tag-default tag-pill tag-outline">implementations</li>
          <!---->
        </ul></router-link
      >
    </div></app-article-preview
  >
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleMeta from "@/components/article/ArticleMeta.vue";

@Options({
  components: {
    ArticleMeta,
  },
})
export default class ArticlePreview extends Vue {}
</script>
