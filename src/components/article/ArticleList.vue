<template>
  <app-article-list>
    <!-- TODO: v-for-->
    <ArticlePreview />
    <!-- TODO: loading-->
    <div class="app-article-preview" hidden="">Loading articles...</div>
    <div class="app-article-preview" hidden="">No articles are here... yet.</div>
    <!-- TODO: pagination-->
    <nav>
      <ul class="pagination">
        <li class="page-item active">
          <a class="page-link">1</a>
        </li>
      </ul>
    </nav>
  </app-article-list>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticlePreview from "@/components/article/ArticlePreview.vue";

@Options({
  components: {
    ArticlePreview,
  },
})
export default class ArticleList extends Vue {}
</script>

<style></style>
