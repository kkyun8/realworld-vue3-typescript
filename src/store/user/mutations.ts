import { MutationTree } from "vuex";
import { IUserState } from "@/types";
import { ILogin, IRegister, IUser, IProfile } from "@/types/user";

const mutations: MutationTree<IUserState> = {
  setRegister(state: IUserState, register: IRegister): void {
    state.register = register;
  },
  setLogin(state: IUserState, login: ILogin): void {
    state.login = login;
  },
  setLoginUser(state: IUserState, loginUser: IUser): void {
    state.loginUser = loginUser;
  },
  setProfile(state: IUserState, profile: IProfile): void {
    state.profile = profile;
  },
};

export default mutations;
