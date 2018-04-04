import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      { name: '马云', price: '200' },
      { name: '马华腾', price: '140' },
      { name: '马冬梅', price: '100' },
      { name: '马荣', price: '80' },
    ],
    count: 0,
    todos: [
      {id: 1, text: '...', done: true},
      {id: 2, text: '...', done: false},
      {id: 3, text: '...', done: true},
      {id: 4, text: '...', done: false}
    ],
    objSet: {
      id:'1230',
    }
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map(
        product => {
          return {
            name: '**' + product.name +'**',
            price: product.price / 2
          }
        }
      )
      return saleProducts;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    //接受其他getter作为参数
    doneTodoCount: (state, getters) => {
      return getters.doneTodos.length + '--' +state.count
    },
    getTodoId: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(item => {
        item.price -= payload;
      })
    },
    increment: (state, payload) => {   
      state.count += payload
    },
  },
  actions: {
    reducePrice(context, payload) {
      setTimeout(function() {
        context.commit('reducePrice', payload)
      }, 2000);     
    },
    increment(context, payload) {
      context.commit('increment', payload)
    }
  }
})