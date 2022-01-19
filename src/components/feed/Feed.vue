<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <!-- TODO: ログインした場合表示 -->
      <li class="nav-item" show-authed="true" style="">
        <a
          href=""
          class="nav-link"
          ng-class="{ active: $ctrl.listConfig.type === 'feed' }"
          ng-click="$ctrl.changeList({ type: 'feed' })"
        >
          Your Feed
        </a>
      </li>

      <li class="nav-item">
        <a
          href=""
          class="nav-link"
          ng-class="{ active: $ctrl.listConfig.type === 'all' &amp;&amp; !$ctrl.listConfig.filters }"
          ng-click="$ctrl.changeList({ type: 'all' })"
        >
          Global Feed
        </a>
      </li>

      <!-- TODO: tag活性がした場合表示 -->
      <li class="nav-item">
        <a href="" class="nav-link active ng-binding"> <i class="ion-pound"></i> welcome </a>
      </li>
    </ul>
  </div>
  <ArticleList />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ArticleList from "@/components/article/ArticleList.vue";

@Options({
  components: {
    ArticleList,
  },
})
export default class Feed extends Vue {}
</script>
