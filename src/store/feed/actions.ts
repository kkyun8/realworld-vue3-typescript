import { ActionTree } from "vuex";
import axios from "@/lib/axios";
import { IFeedState, RootState } from "@/types";

const actions: ActionTree<IFeedState, RootState> = {
  async getArticleList({ commit, state }: any, value: string): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get("/feed", { params: state.feedParams })
      .then((res: any) => {
        commit("setArticleList", res.data.data);

        const { limit, page, totalCount, userId, tagId } = res.data;
        const values = { limit, page, totalCount, userId, tagId };
        commit("setFeedParams", values);
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async getArticle({ commit, state }: any, value: string): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get(`/feed/${value}`)
      .then((res: any) => {
        commit("setArticle", res.data);
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
};

export default actions;
