<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <router-link class="comment-author" :to="`/profile/${comment.user.id}`">
        <img
          alt="author image"
          class="comment-author-img"
          :src="
            comment.user.image
              ? comment.user.image
              : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
          "
      /></router-link>
      <router-link class="comment-author" :to="`/profile/${comment.user.id}`">
        {{ comment.user.name }}</router-link
      >
      <span class="date-posted"> {{ comment.createAt }} </span>
      <span class="mod-options" hidden=""><i class="ion-trash-a"></i></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
});
</script>
