<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img
              alt="user image"
              class="user-img"
              src="https://api.realworld.io/images/demo-avatar.png"
            />
            <h4>Gerome</h4>
            <p></p>
            <app-follow-button
              ><button class="btn btn-sm action-btn btn-outline-secondary">
                <i class="ion-plus-round"></i> &nbsp; Follow Gerome
              </button></app-follow-button
            ><a class="btn btn-sm btn-outline-secondary action-btn" hidden="" href="/settings"
              ><i class="ion-gear-a"></i> Edit Profile Settings
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- TODO: feed? -->
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a routerlinkactive="active" class="nav-link active" href="/profile/Gerome">
                  My Posts
                </a>
              </li>
              <li class="nav-item">
                <a routerlinkactive="active" class="nav-link" href="/profile/Gerome/favorites">
                  Favorited Posts
                </a>
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
import { Options, Vue } from "vue-class-component";
import ArticleList from "@/components/article/ArticleList.vue";

@Options({
  components: {
    ArticleList,
  },
})
export default class Profile extends Vue {}
</script>
