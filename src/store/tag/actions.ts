import { ActionTree } from "vuex";
import axios from "@/lib/axios";
import router from "@/router";
import { ITagState, RootState } from "@/types";

const actions: ActionTree<ITagState, RootState> = {
  async getTagList({ commit, state }: any): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get("/tags")
      .then((res: any) => {
        commit("setTagList", res.data);
        commit("common/setDefaultState", true, { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
};

export default actions;
