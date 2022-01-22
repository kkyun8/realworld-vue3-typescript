import { MutationTree } from "vuex";
import { ICommonState } from "@/types";

const mutations: MutationTree<ICommonState> = {
  setDefaultState(state: ICommonState): void {
    state.hasError = false;
    state.messages = [];
  },
  setLoading(state: ICommonState, value: boolean): void {
    state.isLoading = value;
  },
  setHasError(state: ICommonState, value: boolean): void {
    state.hasError = value;
  },
  setMessages(state: ICommonState, value: string[]): void {
    state.messages = value;
  },
};

export default mutations;
