<template>
  <div class="container page">
    <div class="row">
      <div class="col-md-10 offset-md-1 col-xs-12">
        <ul v-if="hasError" class="error-messages">
          <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul>
        <ArticleForm />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import ArticleForm from "@/components/article/ArticleForm.vue";

export default defineComponent({
  name: "ArticleEditor",
  components: { ArticleForm },
  setup() {
    const store = useStore();
    store.commit("common/setDefaultState", { root: true });

    const hasError = computed(() => store.state.common.hasError);
    const messages = computed(() => store.state.common.messages);

    return { hasError, messages };
  },
});
</script>
