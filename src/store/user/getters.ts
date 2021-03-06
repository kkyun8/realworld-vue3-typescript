import { GetterTree } from "vuex";
import { IUserState, RootState } from "@/types";

const getters: GetterTree<IUserState, RootState> = {
  isLogin: (state: IUserState) => {
    return state.loginUser.name != "";
  },
};

export default getters;
