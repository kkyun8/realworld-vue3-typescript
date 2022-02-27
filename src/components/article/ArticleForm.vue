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
import { defineComponent, reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/store";
import { IUpdateArtile } from "@/types/feed";

export default defineComponent({
  name: "ArticleForm",
  setup() {
    const store = useStore();
    const route = useRoute();
    const { loginUser } = store.state.user;
    const id = route.params.id;
    const isNew = id === "new";

    const tagList = ref<string[]>([]);
    const tag = ref("");

    const input = reactive<IUpdateArtile>({
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

    onMounted(async () => {
      if (isNew) return;

      await store.dispatch("feed/getArticle", id);
      const { title, body, description, tags } = store.state.feed.article;
      input.title = title;
      input.body = body;
      input.description = description || "";

      tagList.value = tags?.map((t) => t.name) || [];
    });

    async function submit() {
      const { title, body, description, userId } = input;

      if (isNew) {
        await store.dispatch("feed/createArticle", {
          title,
          body,
          description,
          userId,
          tagList: tagList.value,
        });
      } else {
        await store.dispatch("feed/updateArticle", {
          id,
          article: {
            title,
            body,
            description,
            userId,
            tagList: tagList.value,
          },
        });
      }
    }

    return { input, submit, tagList, tag, addTag, deleteTag };
  },
});
</script>
