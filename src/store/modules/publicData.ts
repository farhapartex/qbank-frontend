import { PublicDataState, RootState, User } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import axios from "axios";
import {
    ACCESS_TOKEN,
    USER_PROFILE,
    DEPARTMENTS,
} from "../getters.names";
import { SET_DEPARTMENTS, SET_DEPARTMENTS_ERROR } from '../mutations.names';
import { FETCH_DEPARTMENTS, FETCH_COURSES, CREATE_QUESTION, FETCH_QUESTIONS, } from '../actions.names';
import { DEPARTMENT_ENDPOINT, COURSE_ENDPOINT, QUESTION_ENDPOINT } from '../endpoints.names';
import { buildQueryParams } from '@/utils/api';
import { generateAuthHeader } from '@/utils/auth';

const DEFAULT_DATA_STATE: PublicDataState = {
    departments: [],
    error: false
};


export const state: PublicDataState = JSON.parse(JSON.stringify(DEFAULT_DATA_STATE));

const getters: GetterTree<PublicDataState, RootState> = {
    [DEPARTMENTS](state): any {
        return state.departments;
    },
};

const actions: ActionTree<PublicDataState, RootState> = {
    [FETCH_DEPARTMENTS]({ commit, rootState }) {
        let url = DEPARTMENT_ENDPOINT;

        axios
            .get(url)
            .then(({ data }) => {
                // console.log(data);
                commit(SET_DEPARTMENTS, data);
            })
            .catch(e => {
                commit(SET_DEPARTMENTS_ERROR);
            });
    },

    [FETCH_COURSES]({ commit, rootState }, payload) {

        return new Promise((resolve, reject) => {
            const url = `${COURSE_ENDPOINT}${buildQueryParams(payload)}`
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

    async [CREATE_QUESTION]({ rootState, commit }, payload): Promise<any> {
        return new Promise((resolve, reject) => {
            axios
                .post(QUESTION_ENDPOINT, payload, generateAuthHeader(rootState.AuthModule.token))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch((e: any) => {
                    reject(e);
                });
        });
    },

    async [FETCH_QUESTIONS]({ commit, rootState }, payload): Promise<any> {

        return new Promise((resolve, reject) => {
            const url = `${QUESTION_ENDPOINT}${buildQueryParams(payload)}`
            axios
                .get(url, generateAuthHeader(rootState.AuthModule.token))
                .then(({ data }) => {
                    resolve(data);
                })
                .catch(e => {
                    reject(e);
                });
        });
    },
};

const mutations: MutationTree<PublicDataState> = {
    [SET_DEPARTMENTS](state, payload) {
        state.departments = payload;
        window.localStorage.setItem("departments", payload);
        state.error = false;
    },
    [SET_DEPARTMENTS_ERROR](state) {
        state.departments = [];
        window.localStorage.removeItem("departments");
        state.error = true;
    },
};

const PublicDataModule: Module<PublicDataState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default PublicDataModule;
