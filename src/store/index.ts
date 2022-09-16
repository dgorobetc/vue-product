import Vue from "vue";
import Vuex from "vuex";
import { IRootState, ProductType } from "../types";
import { CREATE_PRODUCT, SELECT_PRODUCT, DESELECT_PRODUCT, REMOVE_SELECTED_PRODUCTS, SELECT_ALL_PRODUCTS, DESELECT_ALL_PRODUCTS } from './mutationsTypes';
import find from 'lodash/find'
import filter from 'lodash/filter'
import includes from 'lodash/includes'
import VuexPersistence from 'vuex-persist'
import map from 'lodash/map'
Vue.use(Vuex);


const state = {
  productList: [],
  selectedIds: [],
};

const vuexLocal = new VuexPersistence<IRootState>({
  storage: window.localStorage
})

const store = new Vuex.Store<IRootState>({
  state,
  mutations: {
    [CREATE_PRODUCT](state: IRootState, payload: ProductType) {
      state.productList = [...state.productList, payload]
    },
    [SELECT_PRODUCT](state: IRootState, payload: string) {
      state.selectedIds = [...state.selectedIds, payload]
    },
    [DESELECT_PRODUCT](state: IRootState, payload: string) {
      const { selectedIds } = { ...state }
      const filteredArray = filter([...selectedIds], (elem) => elem !== payload)
      state.selectedIds = filteredArray
    },

    [DESELECT_PRODUCT](state: IRootState, payload: string) {
      const { selectedIds } = { ...state }
      const filteredArray = filter([...selectedIds], (elem) => elem !== payload)
      state.selectedIds = filteredArray
    },
    [REMOVE_SELECTED_PRODUCTS](state: IRootState) {
      const { selectedIds, productList } = { ...state }
      state.productList = filter([...productList], (({ id }) => !includes([...selectedIds], id)))
      state.selectedIds = []
    },
    [SELECT_ALL_PRODUCTS](state: IRootState) {
      const { productList } = { ...state }
      state.selectedIds = map([...productList], (product) => product.id)
    },
    [DESELECT_ALL_PRODUCTS](state: IRootState) {
      state.selectedIds = []
    }

  },
  getters: {
    isProductSelected: (state) => (id: string) =>
      !!find(state.selectedIds, (elem) => elem === id),
    getTotlaPrice: (state) => {
      const { productList } = { ...state }
      const totalValue = [...productList].reduce((acc, { price, qty }) => {
        const productTotal = price * qty
        return acc + productTotal
      }, 0)
      return totalValue
    },
    isAllProductsSelected: (state) => state.productList.length && state.productList.length === state.selectedIds.length
  },
  plugins: [vuexLocal.plugin]
});

export default store;
