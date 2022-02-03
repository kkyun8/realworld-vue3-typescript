<template>
  <div class="article-meta">
    <router-link :to="`/profile/${createUser.id}`"
      ><img
        alt="author image"
        :src="
          createUser.image ? createUser.image : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
        "
    /></router-link>
    <div class="info">
      <router-link to="/profile" class="author"> {{ createUser.name }} </router-link
      ><span class="date"> {{ updatedAt }} </span>
      <!-- TODO: Date type -> November 24, 2021 -->
    </div>
    <!-- TODO: hide heart button -->
    <template v-if="isArticlePage">
      <template v-if="isCreater">
        <!--  TODO: isCreater EditArticle
        TODO: isCreater DeleteArticle-->
      </template>
      <template v-else>
        <button
          class="btn btn-sm action-btn btn-outline-secondary"
          :class="[{ 'btn-secondary': isFollowing }, { 'btn-outline-secondary': !isFollowing }]"
          @click.prevent.stop="followOrUnFollow()"
        >
          <!-- btn-outline-secondary btn-secondary -->
          <i class="ion-plus-round"></i> {{ isFollowing ? "UnFollow" : "Follow" }}
          {{ createUser.name }}
        </button>
        <button
          class="btn btn-sm"
          :class="[
            { 'btn-primary': articleIsFavorited },
            { 'btn-outline-primary': !articleIsFavorited },
          ]"
          @click.prevent.stop="favoriteOrUnFavorite()"
        >
          <i class="ion-heart"></i
          ><span> {{ articleIsFavorited ? "UnFavorite" : "Favorite" }} Article </span
          ><span class="counter">({{ articleFavoriteCount }})</span>
        </button>
      </template>
    </template>
    <div v-else class="pull-xs-right">
      <button
        class="btn btn-sm"
        :class="[
          { 'btn-primary': articleIsFavorited },
          { 'btn-outline-primary': !articleIsFavorited },
        ]"
        @click.prevent.stop.stop="favoriteOrUnFavorite()"
      >
        <i class="ion-heart"></i> {{ articleFavoriteCount }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";

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
    articleId: {
      type: Number,
      required: true,
    },
    favoriteCount: {
      type: Number,
      required: true,
    },
    isFavorited: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();

    const isArticlePage = route.path.split("/")[1] === "article";
    const articleFavoriteCount = computed(() => props.favoriteCount || 0);
    const isLogin = computed(() => store.getters["user/isLogin"]);
    const loginUserId = store.state.user.loginUser.id;

    const createUser = computed(() =>
      props?.user
        ? props?.user
        : { id: -1, email: "", name: "", image: null, title: null, description: null }
    );
    const isCreater = computed(() => createUser.value.id === store.state.user.loginUser.id);

    const isFollowing = computed(() => props.user?.isFollowing);
    const articleIsFavorited = computed(() => props.isFavorited);

    async function followOrUnFollow() {
      if (!isFollowing.value) {
        await store.dispatch("user/follow", createUser.value.id);
      } else {
        await store.dispatch("user/unFollow", createUser.value.id);
      }
    }

    async function favoriteOrUnFavorite() {
      if (!articleIsFavorited.value) {
        await store.dispatch("user/favoriteFeed", { articleId: props.articleId, isArticlePage });
      } else {
        await store.dispatch("user/unFavoriteFeed", { articleId: props.articleId, isArticlePage });
      }
    }

    return {
      isLogin,
      isArticlePage,
      isCreater,
      loginUserId,
      createUser,
      articleFavoriteCount,
      isFollowing,
      articleIsFavorited,
      followOrUnFollow,
      favoriteOrUnFavorite,
    };
  },
});
</script>
