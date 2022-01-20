import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { IUserState } from "@/types";

const state: IUserState = { register: { username: "", email: "", password: "" } };

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
