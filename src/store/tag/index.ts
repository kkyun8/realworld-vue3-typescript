import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ITagState } from "@/types";

const state: ITagState = {
  tag: { id: 0, name: "", body: "" },
  tagList: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
