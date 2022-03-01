import { ActionTree } from "vuex";
import axios from "@/lib/axios";
import router from "@/router";
import { IUserState, RootState } from "@/types";
import { IUserSettings } from "@/types/user";

const loginSetup = (data: any) => {
  const { id, name, image } = data;
  const loginUser = {
    id,
    name,
    image,
  };
  return loginUser;
};

const actions: ActionTree<IUserState, RootState> = {
  async register({ commit, state, dispatch }: any): Promise<any> {
    const { name, email, password } = state.register;
    const params = { name, email, password };

    commit("common/setLoading", true, { root: true });

    const result = await axios
      .post("/user", params)
      .then((res: any) => {
        commit("setLogin", { email, password });
        dispatch("login", "");
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async login({ commit, state, dispatch }: any): Promise<any> {
    const { email, password } = state.login;
    const params = { email, password };

    commit("common/setLoading", true, { root: true });

    const result = await axios
      .post("/auth/login", params)
      .then((res: any) => {
        const loginUser = loginSetup(res.data.user);
        const { token } = res.data;
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        localStorage.setItem("token", token);

        commit("setLoginUser", loginUser);

        commit("common/setDefaultState", true, { root: true });
        router.push({ name: "Home" });

        commit("feed/setFeedParamsPage", 1, { root: true });
        commit("feed/setFeedParamsUserId", loginUser.id, { root: true });
        commit("feed/setFeedParamsTagId", 0, { root: true });
        dispatch("feed/getArticleList", "", { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async token({ commit, dispatch }) {
    commit("common/setLoading", true, { root: true });
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      return;
    }

    const result = await axios
      .post("/auth/token")
      .then((res: any) => {
        const loginUser = loginSetup(res.data.user);
        //localStorage.setItem("token", token);

        commit("setLoginUser", loginUser);

        commit("common/setDefaultState", true, { root: true });
        router.push({ name: "Home" });

        commit("feed/setFeedParamsPage", 1, { root: true });
        commit("feed/setFeedParamsUserId", loginUser.id, { root: true });
        commit("feed/setFeedParamsTagId", 0, { root: true });
        dispatch("feed/getArticleList", "", { root: true });
      })
      .catch(() => localStorage.removeItem("token"))
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  logout({ commit }): void {
    const loginUser = { id: 0, email: "", name: "", image: null, title: null, description: null };
    commit("user/setLoginUser", loginUser, { root: true });
    commit("common/setDefaultState", true, { root: true });
    router.push({ name: "Home" });
  },
  async profile({ commit }: any, value: number): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .get(`/user/${value}`)
      .then((res: any) => {
        const result = res.data;
        commit("setProfile", result);
        commit("common/setDefaultState", true, { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async updateSetting({ commit }: any, params: IUserSettings): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .put(`/user`, params)
      .then((res: any) => {
        const loginUser = loginSetup(res.data.user);
        commit("setLoginUser", loginUser);
        router.push({ name: "Home" });
        commit("common/setDefaultState", true, { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async follow({ commit }: any, articleUserId: number): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .post(`/user/follow/${articleUserId}`)
      .then((res: any) => {
        const followUser = res.data;
        commit("feed/setArticleUser", followUser, { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },

  async unFollow({ commit, state }: any, articleUserId: number): Promise<any> {
    commit("common/setLoading", true, { root: true });

    const result = await axios
      .delete(`/user/follow/${articleUserId}`)
      .then((res: any) => {
        const followUser = res.data;
        commit("feed/setArticleUser", followUser, { root: true });
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },

  async favoriteFeed(
    { commit, state }: any,
    value: { articleId: number; isArticlePage: boolean }
  ): Promise<any> {
    // TODO: loading type set
    // commit("common/setLoading", true, { root: true });

    const { articleId, isArticlePage } = value;

    const result = await axios
      .post(`/feed/${articleId}/favorite`)
      .then((res: any) => {
        const feed = res.data;

        if (isArticlePage) {
          commit("feed/setArticle", feed, { root: true });
        } else {
          commit("feed/setArticleInArticleList", feed, { root: true });
        }
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
  async unFavoriteFeed(
    { commit, state }: any,
    value: { articleId: number; isArticlePage: boolean }
  ): Promise<any> {
    // TODO: loading type set
    // commit("common/setLoading", true, { root: true });

    const { articleId, isArticlePage } = value;

    const result = await axios
      .delete(`/feed/${articleId}/favorite`)
      .then((res: any) => {
        const feed = res.data;

        if (isArticlePage) {
          commit("feed/setArticle", feed, { root: true });
        } else {
          commit("feed/setArticleInArticleList", feed, { root: true });
        }
      })
      .finally(() => commit("common/setLoading", false, { root: true }));

    return result;
  },
};

export default actions;
