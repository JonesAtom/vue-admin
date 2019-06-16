import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './acions.js'

Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
}) 

export default store