import {SET_COUNTER, GET_COUNTER, MINUS_COUNTER} from './type'

export const counter = {
    state:{
        counter:0
    },
    getters:{
        [GET_COUNTER]: state => state.counter
    },
    mutations:{
        [SET_COUNTER]: state => state.counter++,
        [MINUS_COUNTER]: state => state.counter--,
    },
    actions:{
        [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER),
        [MINUS_COUNTER]: ({ commit }) => {
            commit(MINUS_COUNTER)
        }
    }
}