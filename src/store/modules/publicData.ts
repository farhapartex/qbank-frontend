import { PublicDataState, RootState, User } from "../store.types";
import { GetterTree, ActionTree, MutationTree, Module } from "vuex";
import vue from "vue";
import {
    ACCESS_TOKEN,
    USER_PROFILE,
    DEPARTMENTS,
} from "../getters.names";
import { SET_DEPARTMENTS, SET_DEPARTMENTS_ERROR } from '../mutations.names';
import { FETCH_DEPARTMENTS, } from '../actions.names';
import { DEPARTMENT_ENDPOINT } from '../endpoints.names';

const DEFAULT_DATA_STATE: PublicDataState = {
    departments: [],
    error: false
};


export const state: PublicDataState = JSON.parse(JSON.stringify(DEFAULT_DATA_STATE));

const getters: GetterTree<PublicDataState, RootState> = {

};

const actions: ActionTree<PublicDataState, RootState> = {

};

const mutations: MutationTree<PublicDataState> = {

};

const PublicDataModule: Module<PublicDataState, RootState> = {
    state,
    getters,
    actions,
    mutations
};

export default PublicDataModule;
