<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>Create a new implementation</h1>
        <ArticleMeta />
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <div>
            <p>Share your knowledge and enpower the community by creating a new implementation</p>
          </div>
          <ul class="tag-list">
            <li class="tag-default tag-pill tag-outline">implementations</li>
            <!---->
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <ArticleMeta />
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <!---->
          <div>
            <router-link to="/login">Sign in</router-link> or
            <router-link to="/register">sign up</router-link> to add comments on this article.
          </div>
          <!-- TODO: loginの場合-->
          <CommentEditor />
          <Comment />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleMeta from "@/components/article/ArticleMeta.vue";
import CommentEditor from "@/components/comment/CommentEditor.vue";
import Comment from "@/components/comment/Comment.vue";

@Options({
  components: {
    ArticleMeta,
    CommentEditor,
    Comment,
  },
})
export default class Article extends Vue {}
</script>
