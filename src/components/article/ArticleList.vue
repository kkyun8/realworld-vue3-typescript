<template>
  <div v-if="isLoading" class="app-article-preview" hidden="">Loading articles...</div>
  <div v-if="isListEmpty" class="article-preview">No articles are here... yet.</div>
  <ArticlePreview v-for="article in articleList" :key="`feed${article.id}`" :article="article" />
  <nav>
    <ul class="pagination">
      <li
        v-for="pageNumber of totalPages"
        :key="`pageNumber${pageNumber}`"
        class="page-item"
        :class="{ active: pageNumber === page }"
      >
        <div class="page-link" @click.prevent="page = pageNumber">{{ pageNumber }}</div>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, watch, onMounted } from "vue";
import { useStore } from "@/store";
import ArticlePreview from "@/components/article/ArticlePreview.vue";

export default defineComponent({
  components: {
    ArticlePreview,
  },
  name: "ArticleList",
  setup() {
    const store = useStore();

    const isLoading = computed(() => store.state.common.isLoading);
    const articleList = computed(() => store.state.feed.articleList);

    const page = computed({
      get: () => store.state.feed.feedParams.page,
      set: (value: number) => store.commit("feed/setFeedParamsPage", value),
    });
    const tagId = computed(() => store.state.feed.feedParams.tagId);
    const userId = computed(() => store.state.feed.feedParams.userId);

    const isListEmpty = computed(() => store.state.feed.articleList.length === 0);

    const totalPages = computed(() =>
      Math.ceil(store.state.feed.feedParams.totalCount / store.state.feed.feedParams.limit)
    );

    watch(page, async () => {
      await store.dispatch("feed/getArticleList");
    });

    onMounted(async () => {
      await store.dispatch("feed/getArticleList");
    });

    return {
      isLoading,
      isListEmpty,
      articleList,
      page,
      totalPages,
    };
  },
});
</script>
