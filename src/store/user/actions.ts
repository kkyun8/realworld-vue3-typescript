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
        const loginUser = { id, email, name, image, title, description };

        localStorage.setItem("userLoginInfo", JSON.stringify({ email, password }));
        commit("user/setLoginUser", loginUser, { root: true });
        commit("common/setDefaultState", true, { root: true });
        router.push({ name: "Home" });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async login({ commit, state }: any): Promise<any> {
    const { email, password } = state.login;
    const params = { email, password };

    commit("common/setLoading", true, { root: true });

    const result = await axios
      .post("/user/login", params)
      .then((res: any) => {
        const { id, email, name, image, title, description } = res.data;
        const loginUser = { id, email, name, image, title, description };

        localStorage.setItem("userLoginInfo", JSON.stringify({ email, password }));
        commit("user/setLoginUser", loginUser, { root: true });
        commit("common/setDefaultState", true, { root: true });
        router.push({ name: "Home" });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  logout({ commit }): void {
    // TODO: logout api
    localStorage.removeItem("userLoginInfo");
    const loginUser = { id: 0, email: "", name: "", image: null, title: null, description: null };
    commit("user/setLoginUser", loginUser, { root: true });
    commit("common/setDefaultState", true, { root: true });
    router.push({ name: "Home" });
  },
};

export default actions;
