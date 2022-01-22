import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { ICommonState } from "@/types";

const state: ICommonState = {
  isLoading: false,
  hasError: false,
  messages: [],
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
