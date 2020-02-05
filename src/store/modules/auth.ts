import { AuthState, RootState, User } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import {
    ACCESS_TOKEN,
    USER_PROFILE,
} from "../getters.names";

const DEFAULT_AUTH_STATE: AuthState = {
    token: null,
    user: null,
    error: false,
    accessLevel: null
};

export const state: AuthState = JSON.parse(JSON.stringify(DEFAULT_AUTH_STATE));

const getters: GetterTree<AuthState, RootState> = {
    [ACCESS_TOKEN](state): string | null {
        return state.token;
    },
    [USER_PROFILE](state): User | null {
        return state.user;
    },
};

const actions: ActionTree<AuthState, RootState> = {

};

const mutations: MutationTree<AuthState> = {

};

const authStateModule: Module<AuthState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default authStateModule;