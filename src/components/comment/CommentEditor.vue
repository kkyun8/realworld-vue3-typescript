<template>
  <div style="display: inherit">
    <ul v-if="hasError" class="error-messages">
      <li v-for="message in messages" :key="message">{{ message }}</li>
    </ul>
    <form class="card comment-form">
      <div class="card-block">
        <textarea
          v-model="input.body"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        >
        </textarea>
      </div>
      <div class="card-footer">
        <img
          class="comment-author-img"
          :src="
            loginUserImage ? loginUserImage : 'https://api.realworld.io/images/smiley-cyrus.jpeg'
          "
        />
        <button type="submit" class="btn btn-sm btn-primary" @click.prevent.stop.stop="submit()">
          Post Comment
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useStore } from "@/store";
import { IComment } from "@/types/feed";

export default defineComponent({
  name: "CommentEditor",
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    store.commit("common/setDefaultState", { root: true });

    const input = reactive<IComment>({
      body: "",
      feedId: 0,
    });

    const loginUserImage = store.state.user.loginUser.image;
    const hasError = computed(() => store.state.common.hasError);
    const messages = computed(() => store.state.common.messages);

    async function submit() {
      input.feedId = props.articleId;
      const { body, feedId } = input;
      store.commit("feed/setComment", { body, feedId });
      await store.dispatch("feed/updateComment", 0);
      input.body = "";
    }

    return {
      input,
      loginUserImage,
      hasError,
      messages,
      submit,
    };
  },
});
</script>
