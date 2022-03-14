<template>
  <div class="card">
    <div class="card-block">
      <pre class="card-text">{{ comment.body }}</pre>
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

      <span v-if="comment.userId === loginUserId" class="mod-options"
        ><i @click="updateComment" class="ion-paintbrush" />
        <i @click="deleteComment" class="ion-trash-a" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import modal from "@/components/common/modal";

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
      const isConfrim = await modal(
        "CommentDelete",
        "Are you sure you want to delete the comment?",
        true
      )
        .then(() => true)
        .catch(() => false);

      if (!isConfrim) {
        return;
      }
      const { id } = props.comment;
      await store.dispatch("feed/deleteComment", id);
    }

    async function updateComment() {
      const { id, feedId } = props.comment;
      const old = props.comment.body;
      const body = await modal("CommentDelete", "Please write a comment.", true, true, old).catch(
        () => ""
      );

      if (!body) {
        return;
      }

      store.commit("feed/setComment", { body, feedId });
      await store.dispatch("feed/updateComment", id);
    }

    return { updateComment, deleteComment, loginUserId };
  },
});
</script>
