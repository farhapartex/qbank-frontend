import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from "./store.types";
import AuthModule from "./modules/auth";
import PublicDataModule from "./modules/publicData";

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    AuthModule,
    PublicDataModule
  }
};

export default new Vuex.Store<RootState>(store);