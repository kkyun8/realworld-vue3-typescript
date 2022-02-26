import { ActionTree } from "vuex";
import axios from "@/lib/axios";
import { IFeedState, RootState } from "@/types";
import { ICreateArtile } from "@/types/feed";
import router from "@/router";

const actions: ActionTree<IFeedState, RootState> = {
  async getArticleList({ commit, state }: any, value: string): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get("/feed", { params: state.feedParams })
      .then((res: any) => {
        commit("setArticleList", res.data.data);

        const { limit, page, totalCount, userId, tagId, isFavorite } = res.data;
        const values = { limit, page, totalCount, userId, tagId, isFavorite };
        commit("setFeedParams", values);
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },

  async getArticle({ commit }: any, value: string): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get(`/feed/${value}`)
      .then((res: any) => {
        commit("setArticle", res.data);
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },

  async createArticle({ commit }: any, artile: ICreateArtile): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const { title, body, description, userId, tagList } = artile;
    const params = { title, body, description, userId, tagList };

    const result = await axios
      .post(`/feed`, params)
      .then((res: any) => {
        router.push({ name: "Home" });
      })
      .finally(() => {
        commit("common/setLoading", false, { root: true });
      });

    return result;
  },

  async updateComment({ commit, state, dispatch }: any, commentId: number): Promise<any> {
    commit("common/setLoading", true, { root: true });
    const { body, feedId } = state.comment;
    const params = { body, feedId };

    const result = await axios
      .put(`/comment/${commentId}`, params)
      .then((res: any) => {
        // TODO: return article?
        const { id } = state.article;
        dispatch("getArticle", id);
      })
      .finally(() => {
        commit("setComment", "");
        commit("common/setLoading", false, { root: true });
      });

    return result;
  },
  async deleteComment({ commit, state, dispatch }: any, commentId: number): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .delete(`/comment/${commentId}`)
      .then((res: any) => {
        // TODO: return article?
        const { id } = state.article;
        dispatch("getArticle", id);
      })
      .finally(() => {
        commit("setComment", "");
        commit("common/setLoading", false, { root: true });
      });

    return result;
  },
};

export default actions;
