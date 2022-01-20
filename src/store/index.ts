import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import user from "./user";

import { IState } from "../types/index";

export const key: InjectionKey<Store<IState>> = Symbol();

export const store = createStore<IState>({
  modules: {
    user,
  },
});
