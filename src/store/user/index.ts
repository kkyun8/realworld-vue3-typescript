import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import { IUserState } from "@/types";

const state: IUserState = {
  register: { name: "", email: "", password: "" },
  login: { email: "", password: "" },
  loginUser: { id: 0, email: "", name: "", image: null, title: null, description: null },
  profile: {
    id: 0,
    email: "",
    name: "",
    image: null,
    title: null,
    description: null,
    isLoginUser: false,
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
