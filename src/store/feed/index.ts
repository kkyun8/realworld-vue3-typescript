import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { IFeedState } from "@/types";

const state: IFeedState = {
  article: { id: 0, title: "", body: "", description: "", userId: 0, favoriteCount: 0 },
  articleList: [],
  comment: { body: "", feedId: 0 },
  feedParams: { tagId: 0, userId: 0, page: 1, limit: 5, totalCount: 0 },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
