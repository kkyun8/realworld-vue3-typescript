import { ActionTree } from "vuex";
import axios from "@/lib/axios";
import router from "@/router";
import { IUserState, RootState } from "@/types";

const actions: ActionTree<IUserState, RootState> = {
  async register({ commit, state }: any): Promise<any> {
    const { name, email, password } = state.register;
    const params = { name, email, password };

    commit("common/setLoading", true, { root: true });

    const result = await axios
      .post("/user", params)
      .then((res: any) => {
        const { id, email, name, image, title, description } = res.data;
        const userInfo = { id, email, name, image, title, description };
        commit("user/setUserInfo", userInfo, { root: true });
        commit("common/setDefaultState", { root: true });
        router.push({ name: "Home" });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
};

export default actions;
