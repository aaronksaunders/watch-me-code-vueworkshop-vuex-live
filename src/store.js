/**
 * FROM OFFICIAL DOCUMENTATION
 * Vuex is the official flux-like implementation for Vue, and offers not only a
 * central place to manage state, but also tools for organizing, tracking, and
 * debugging state changes. It integrates well in the Vue ecosystem
 * (including full Vue DevTools support).
 *
 * https://vuex.vuejs.org/
 *
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state of the application
    appName: "Test Application",
    items: [],
    isLoading: false,
    timestamp: null,
  },
  // ===============================================
  // GETTERS
  //
  getters: {
    // Compute derived state  properties.
    isLoading: (state) => {
      return state.isLoading;
    },
    // Compute derived state  properties.
    itemsWithCheckAs: (state) => (_value) => {
      return state.items.filter((i) => i.on === _value);
    },
    /**
     * gets items based on the ON status..
     */
    getItemsByStatus: (state) => (status) => {
      if (status === "ALL") {
        return state.items;
      }
      return state.items.filter(
        (item) => item.on === (status === "true" ? true : false)
      );
    },
  },
  // ===============================================
  // MUTATIONS
  //
  mutations: {
    removeItem(state, updatedItemsArray) {
      state.items = updatedItemsArray;
    },
    updateStore(state, payload) {
      state.items = payload.items;
      state.timestamp = payload.timestamp;
    },
    // Mutate the current state
    isLoading(state, loading) {
      state.isLoading = loading;
    },
    initializeStore(state, payload) {
      state.items = payload;
    },
    addItem(state, item) {
      state.items.push(item);
    },
    //toggleItem(state, {index,item}) {
    toggleItem(state, payload) {
      state.items.splice(payload.index, 1, {
        ...payload.item,
        on: payload.item.on,
      });
    },
  },
  // ===============================================
  // ACTIONS
  //
  actions: {
    // Get actions == async, then mutate to update the
    // store
    initializeStore({ commit }) {
      commit("isLoading", true);
      setTimeout(() => {
        let i = localStorage.getItem("vue-2020-workshop");
        let items = JSON.parse(i);

        commit("initializeStore", items);

        commit("isLoading", false);
      }, 2000);
    },
    /**
     *
     * @param {*} param0
     */
    updateStore({ commit }) {
      // set loading state
      commit("isLoading", true);

      // return the promise
      return new Promise((resolve) => {
        // fake async call
        setTimeout(() => {
          let storeString = JSON.stringify(this.state.items);
          window.localStorage.setItem("vue-2020-workshop", storeString);

          // update the store
          commit("updateStore", {
            items: this.state.items,
            timestamp: new Date(),
          });

          // reset loading state
          commit("isLoading", false);

          // resolve the promise
          resolve(true);
        }, 2000);
      });
    },
    /**
     *
     * @param {*} param0
     * @param {*} item
     */
    toggleItem({ state, commit }, item) {
      const index = state.items.map((i) => i.id).indexOf(item.id);
      commit("toggleItem", { index, item });
    },
    addItem({ commit }, item) {
      item.id = new Date().getTime();
      commit("addItem", item);
    },
    removeItem({ state, commit }, itemId) {
      let newArray = state.items.filter((item) => {
        return item.id !== itemId;
      });
      commit("removeItem", newArray);
    },
    isLoading({ commit }, loading) {
      commit("isLoading", loading);
    },
  },
});
