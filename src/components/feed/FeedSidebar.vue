<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <div v-if="isLoading">Loading tags...</div>
    <div v-if="isEmpty">No tags are here... yet.</div>
    <div v-else class="tag-list">
      <a
        v-for="tag in tagList"
        :key="`sidebar-tag${tag.id}`"
        class="tag-default tag-pill"
        @click.prevent.stop="callArticleList(tag.id)"
      >
        {{ tag.name }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "FeedSidebar",
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.state.common.isLoading);
    const tagList = computed(() => store.state.tag.tagList);
    const isEmpty = computed(() => store.state.tag.tagList.length === 0);

    onMounted(async () => {
      await store.dispatch("tag/getTagList");
    });

    async function callArticleList(tagId: number) {
      store.commit("feed/setFeedParamsPage", 1);
      store.commit("feed/setFeedParamsUserId", 0);
      store.commit("feed/setFeedParamsTagId", tagId);
      await store.dispatch("feed/getArticleList");
    }

    return { isLoading, tagList, isEmpty, callArticleList };
  },
});
</script>
