import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    exchange: 1
  },
  getters: {
    data: state => {
      return state.data
    },
    exchange: state => {
      return state.exchange
    }
  },
  mutations: {
    updateData(state, data) {
      state.data.push(data);
    },
    removeItem(state, id) {
      state.data.splice(id, 1);
    },
    updateExchange(state, exchange) {
      state.exchange = exchange;
    }
  },
  actions: {
    setData: ({commit}, data) => {
      commit('updateData', data)
    },
    removeItem: ({commit}, id) => {
      commit('removeItem', id)
    },
    updateExchange: ({commit}, exchange) => {
      commit('updateExchange', exchange)
    },
    fetchExchange: ({commit}) => {
      fetch('https://api.ratesapi.io/api/latest')
        .then(response => response.json())
        .then(rates => {
          setTimeout(() => {
            commit('updateExchange', rates.rates.PLN);
          }, 1000)
        })
        .catch(error => console.log(error));
    }
  }
})
