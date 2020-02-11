import { AuthState, RootState, User, AuthCredential } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN,
    USER_PROFILE,
} from "../getters.names";
import { AUTHENTICATION_ENDPOINT, LOGOUT_ENDPOINT, USER_ENDPOINT, PROFILE_ENDPOINT } from '../endpoints.names';
import { SET_AUTH, SET_AUTH_ERROR, CLEAR_AUTH, GET_AUTH_FROM_STORE, SET_PROFILE, SET_PROFILE_ERROR } from '../mutations.names';
import { LOGIN, LOGOUT, AUTHENTICATE_SINGLE_USER, RETRIEVE_AUTH_FROM_STORE, FETCH_PROFILE } from '../actions.names';
import { generateAuthHeader } from '@/utils/auth';

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
    async [LOGIN]({ commit, dispatch }, cred: AuthCredential): Promise<any> {
        axios
            .post(AUTHENTICATION_ENDPOINT, cred)
            .then(({ data }) => {
                const token = data.key;
                commit(SET_AUTH, token);
                dispatch(FETCH_PROFILE);
            })
            .catch(e => {
                commit(SET_AUTH_ERROR);
            });
    },
    async [LOGOUT]({ commit }): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .post(LOGOUT_ENDPOINT, generateAuthHeader(state.token))
                .then(({ data }) => {
                    commit(CLEAR_AUTH);
                    resolve();
                })
                .catch(e => {
                    reject(e);
                });

        });
    },
    async [AUTHENTICATE_SINGLE_USER]({ commit }, username: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = `${USER_ENDPOINT}${username}/`
            axios
                .get(url)
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
    async [FETCH_PROFILE]({ commit, rootState }): Promise<any> {
        axios
            .get(PROFILE_ENDPOINT, generateAuthHeader(rootState.AuthModule.token))
            .then(({ data }) => {
                commit(SET_PROFILE, data);
            })
            .catch(e => {
                commit(SET_PROFILE_ERROR);
            });
    },
    [RETRIEVE_AUTH_FROM_STORE]({ state, commit, dispatch }) {
        commit(GET_AUTH_FROM_STORE);
    },
};

const mutations: MutationTree<AuthState> = {
    [SET_AUTH](state, payload: string) {
        state.token = payload;
        window.localStorage.setItem("authToken", payload);
        state.error = false;
    },
    [SET_AUTH_ERROR](state) {
        state.error = true;
        state.token = null;
        window.localStorage.removeItem("authToken");
    },
    [CLEAR_AUTH](state: AuthState) {
        window.localStorage.removeItem("authToken");
        window.localStorage.removeItem("profile");
        state.user = null;
        state.token = null;
        state.error = false;
    },
    [GET_AUTH_FROM_STORE](state) {
        const token = window.localStorage.getItem("authToken");
        // console.log(token);
        if (token) {
            state.token = token;
            state.error = false;
        }
    },
    [SET_PROFILE](state, payload: User) {
        state.user = payload;
        state.error = false;
    },
    [SET_PROFILE_ERROR](state) {
        state.user = null;
        state.error = true;
    },
};

const authStateModule: Module<AuthState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default authStateModule;