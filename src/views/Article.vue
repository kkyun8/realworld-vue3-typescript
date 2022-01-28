<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <ArticleMeta :user="article.user" :updatedAt="article.updatedAt" :articleId="article.id" />
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <div>
            <p>{{ article.body }}</p>
          </div>
          <ul class="tag-list">
            <li
              v-for="tag in article.tags"
              :key="`article-tag${tag.id}`"
              class="tag-default tag-pill tag-outline"
            >
              {{ tag.name }}
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <ArticleMeta :user="article.user" :updatedAt="article.updatedAt" :articleId="article.id" />
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <div v-if="!isLogin">
            <router-link to="/login">Sign in</router-link> or
            <router-link to="/register">sign up</router-link> to add comments on this article.
          </div>
          <!-- TODO: loginの場合-->
          <CommentEditor v-if="isLogin" />

          <Comment v-for="c in article.comment" :key="`article-comment${c.id}`" :comment="c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import Comment from "@/components/comment/Comment.vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import ArticleMeta from "@/components/article/ArticleMeta.vue";
import CommentEditor from "@/components/comment/CommentEditor.vue";

export default defineComponent({
  name: "Article",
  components: {
    ArticleMeta,
    CommentEditor,
    Comment,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const id = route.params.id;
    const isLogin = computed(() => store.getters["user/isLogin"]);
    const article = computed(() => store.state.feed.article);

    onMounted(async () => {
      await store.dispatch("feed/getArticle", id);
    });

    return { isLogin, article };
  },
});
</script>
