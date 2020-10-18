import Vue from 'vue'
import Vuex from 'vuex'
import {counter} from './modules/counter/'
import {employee} from './modules/employee/'

Vue.use(Vuex)

const vuexStore = new Vuex.Store({
  modules:{
    counter,
    employee
  }
})

export default vuexStore