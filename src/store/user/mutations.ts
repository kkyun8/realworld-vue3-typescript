import { MutationTree } from "vuex";
import { IUserState } from "@/types";
import { IRegister, IUserInfo } from "@/types/user";

const mutations: MutationTree<IUserState> = {
  setRegister(state: IUserState, register: IRegister): void {
    state.register = register;
  },
  setUserInfo(state: IUserState, userInfo: IUserInfo): void {
    state.userInfo = userInfo;
  },
};

export default mutations;
