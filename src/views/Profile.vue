<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              alt="author image"
              :src="
                profile?.image ? profile.image : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
              "
            />
            <h4>{{ profile?.name }}</h4>
            <p></p>
            <button
              v-if="isLogin && !isLoginUser"
              class="btn btn-sm action-btn btn-outline-secondary"
              :class="[{ 'btn-secondary': isFollowing }, { 'btn-outline-secondary': !isFollowing }]"
              @click.prevent.stop="followOrUnFollow()"
            >
              <i class="ion-plus-round"></i> {{ isFollowing ? "UnFollow" : "Follow" }}
              {{ profile?.name }}
            </button>
            <button
              v-if="isLoginUser"
              class="btn btn-sm btn-outline-secondary action-btn"
              href="/settings"
            >
              <i class="ion-gear-a"></i> Edit Profile Settings
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <div
                  class="nav-link"
                  :class="{ active: feedType === 'user' }"
                  @click.prevent.stop="setArticleType('user')"
                >
                  My Posts
                </div>
              </li>
              <li class="nav-item">
                <div
                  class="nav-link"
                  :class="{ active: feedType === 'favorite' }"
                  @click.prevent.stop="setArticleType('favorite')"
                >
                  Favorited Posts
                </div>
              </li>
            </ul>
          </div>
          <ArticleList />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import ArticleList from "@/components/article/ArticleList.vue";

export default defineComponent({
  components: {
    ArticleList,
  },
  name: "Profile",
  setup() {
    const store = useStore();
    const route = useRoute();

    const isLogin = computed(() => store.getters["user/isLogin"]);
    const profile = computed(() => store.state.user.profile);
    const isFollowing = computed(() => store.state.user.profile?.isFollowing);
    const isLoginUser = computed(() => store.state.user.profile?.isLoginUser);
    const feedType = computed(() => store.getters["feed/feedType"]);

    onMounted(async () => {
      const id = route.params.id;
      await store.dispatch("user/profile", id);
      setArticleType("user");
    });

    async function followOrUnFollow() {
      if (!isFollowing.value) {
        await store.dispatch("user/follow", profile.value?.id);
      } else {
        await store.dispatch("user/unFollow", profile.value?.id);
      }
    }

    async function setArticleType(type: string) {
      store.commit("feed/setFeedParamsDefault");
      switch (type) {
        case "favorite":
          store.commit("feed/setFeedParamsUserId", profile.value?.id);
          store.commit("feed/setFeedParamsIsFavorite", true);
          break;
        case "user":
          store.commit("feed/setFeedParamsUserId", profile.value?.id);
          break;
        default:
      }
      await store.dispatch("feed/getArticleList");
    }

    return {
      profile,
      isLogin,
      isFollowing,
      isLoginUser,
      followOrUnFollow,
      feedType,
      setArticleType,
    };
  },
});
</script>
