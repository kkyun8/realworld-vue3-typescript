<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li v-if="isLogin" class="nav-item">
        <div
          class="nav-link"
          :class="{ active: feedType === 'user' }"
          @click.prevent="setArticleType('user')"
        >
          Your Feed
        </div>
      </li>

      <li class="nav-item">
        <div
          class="nav-link"
          :class="{ active: feedType === 'global' }"
          @click.prevent="setArticleType('global')"
        >
          Global Feed
        </div>
      </li>
      <li v-if="hasTag" class="nav-item">
        <div class="nav-link" :class="{ active: feedType === 'tag' }">
          <i class="ion-pound"></i> {{ feedParamsTagName }}
        </div>
      </li>
    </ul>
  </div>
  <ArticleList />
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "@/store";
import ArticleList from "@/components/article/ArticleList.vue";

export default defineComponent({
  components: {
    ArticleList,
  },
  name: "Feed",
  setup() {
    const store = useStore();
    const isLogin = computed(() => store.getters["user/isLogin"]);
    const hasTag = computed(() => store.state.feed.feedParams.tagId !== 0);
    const feedType = computed(() => store.getters["feed/feedType"]);

    const feedParamsTagName = computed(() => store.getters["feed/feedParamsTagName"]);

    onMounted(async () => {
      store.commit("feed/setFeedParamsDefault");
      await store.dispatch("feed/getArticleList");
    });

    async function setArticleType(type: string) {
      store.commit("feed/setFeedParamsDefault");
      switch (type) {
        case "user":
          store.commit("feed/setFeedParamsUserId", store.state.user.loginUser.id);
          break;
        default:
          break;
      }
      await store.dispatch("feed/getArticleList");
    }

    return { isLogin, setArticleType, hasTag, feedType, feedParamsTagName };
  },
});
</script>
