<template>
  <form>
    <fieldset>
      <fieldset class="form-group">
        <input
          v-model="input.title"
          class="form-control form-control-lg"
          type="text"
          placeholder="Article Title"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          v-model="input.description"
          class="form-control"
          type="text"
          placeholder="What's this article about?"
        />
      </fieldset>

      <fieldset class="form-group">
        <textarea
          v-model="input.body"
          class="form-control"
          rows="8"
          placeholder="Write your article (in markdown)"
        />
      </fieldset>

      <fieldset class="form-group">
        <input
          v-model="tag"
          class="form-control"
          type="text"
          placeholder="Enter tags"
          @keydown.enter="addTag"
        />

        <div class="tag-list">
          <span v-for="(tag, i) in tagList" :key="`afti-${i}`" class="tag-default tag-pill">
            <i class="ion-close-round" @click.prevent.stop="deleteTag(tag)"></i>{{ tag }}</span
          >
        </div>
      </fieldset>

      <button @click.prevent="submit" class="btn btn-lg pull-xs-right btn-primary" type="button">
        Publish Article
      </button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "@/store";
import { ICreateArtile } from "@/types/feed";

export default defineComponent({
  name: "ArticleForm",
  setup() {
    const store = useStore();
    const { loginUser } = store.state.user;

    const tagList = ref<string[]>([]);
    const tag = ref("");

    const input = reactive<ICreateArtile>({
      title: "",
      body: "",
      description: "",
      userId: loginUser.id,
    });

    function addTag() {
      if (!tag.value) return;
      tagList.value.push(tag.value);
      tagList.value = Array.from(new Set(tagList.value));
      tag.value = "";
    }

    function deleteTag(tag: string) {
      tagList.value = tagList.value.filter((t) => t !== tag);
    }

    async function submit() {
      const { title, body, description, userId } = input;

      await store.dispatch("feed/createArticle", {
        title,
        body,
        description,
        userId,
        tagList: tagList.value,
      });
    }

    return { input, submit, tagList, tag, addTag, deleteTag };
  },
});
</script>
