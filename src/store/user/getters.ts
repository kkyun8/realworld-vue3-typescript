import { GetterTree } from "vuex";
import { IUserState, RootState } from "@/types";

const getters: GetterTree<IUserState, RootState> = {
  isLogin: (state: IUserState) => {
    return state.userInfo.id !== 0;
  },
};

export default getters;
