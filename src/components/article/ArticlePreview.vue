<template>
  <div class="article-preview">
    <ArticleMeta
      :user="article.user"
      :updatedAt="article.updatedAt"
      :articleId="article.id"
      :favoriteCount="article.favoriteCount"
      :isFavorited="article.isFavorited"
    />

    <router-link :to="`/article/${article.id}`" class="preview-link"
      ><h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul v-if="article.tags" class="tag-list">
        <li
          v-for="tag in article.tags"
          :key="`article-preview-tag${tag.id}`"
          class="tag-default tag-pill tag-outline"
          @click.prevent.stop="callTagArticleList(tag.id)"
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
import { useRoute, useRouter } from "vue-router";
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
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const notHome = route.name !== "Home";

    async function callTagArticleList(tagId: number) {
      if (notHome) {
        router.push({ name: "Home", params: { tagId } });
      } else {
        store.commit("feed/setFeedParamsPage", 1);
        store.commit("feed/setFeedParamsUserId", 0);
        store.commit("feed/setFeedParamsTagId", tagId);
        await store.dispatch("feed/getArticleList");
      }
    }

    return {
      callTagArticleList,
    };
  },
});
</script>
