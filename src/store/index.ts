import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import common from "./common";
import user from "./user";

import { RootState } from "../types/index";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  modules: {
    common,
    user,
  },
});

export const useStore = (): Store<RootState> => {
  return baseUseStore(key);
};
