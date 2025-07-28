
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  // State: where we define our app's data/state
  state,
  
  // Getters: where we define computed properties for our store
  getters,
  
  // Mutations: where we define methods that directly change our state
  // Must be synchronous!
  mutations,
  
  // Actions: where we define methods that can perform asynchronous operations
  // and commit multiple mutations
  actions,
});
