<template>
  <div class="article-preview">
    <ArticleMeta :user="article.user" :updatedAt="article.updatedAt" />

    <router-link :to="`/article/${article.id}`" class="preview-link"
      ><h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul v-if="article.tags" class="tag-list">
        <li
          v-for="tag in article.tags"
          :key="`ArticlePreviewTag${tag.id}`"
          class="tag-default tag-pill tag-outline"
          @click.prevent="tagFeed(tag.id)"
        >
          {{ tag.name }}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import ArticleMeta from "@/components/article/ArticleMeta.vue";

export default defineComponent({
  components: {
    ArticleMeta,
  },
  name: "ArticlePreview",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup() {
    function tagFeed(tagId: number) {
      // TODO: feed に tag paramセット
      console.log(`router to feed tag id=${tagId}`);
    }
    return {
      tagFeed,
    };
  },
});
</script>
