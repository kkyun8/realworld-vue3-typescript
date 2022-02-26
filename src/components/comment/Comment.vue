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
      <span class="date-posted"> {{ new Date(comment.createdAt).toDateString() }}</span>
      <span v-if="comment.userId === loginUserId" class="mod-options" @click="deleteComment"
        ><i class="ion-trash-a"></i
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const loginUserId = store.state.user.loginUser.id;

    async function deleteComment() {
      const { id } = props.comment;
      await store.dispatch("feed/deleteComment", id);
    }

    return { deleteComment, loginUserId };
  },
});
</script>
