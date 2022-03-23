import { MutationTree } from "vuex";
import { ICommonState } from "@/types";
import loading from "@/components/common/loading";

const mutations: MutationTree<ICommonState> = {
  setDefaultState(state: ICommonState): void {
    state.hasError = false;
    state.messages = [];
  },
  setLoading(state: ICommonState, value: boolean): void {
    state.isLoading = value;
    loading(value);
  },
  setHasError(state: ICommonState, value: boolean): void {
    state.hasError = value;
  },
  setMessages(state: ICommonState, value: string[]): void {
    state.messages = value;
  },
  setI18n(state: ICommonState, value: any): void {
    state.t = value;
  },
};

export default mutations;
