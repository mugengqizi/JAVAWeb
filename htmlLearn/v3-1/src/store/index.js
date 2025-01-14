// src/store/index.js


import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [],
  },
  mutations: {
    addBook(state, book) {
      console.log(book.id, book.title, book.date)
      state.books.push({id:book.id,title:book.title,date:book.date})
    },
  },
  actions: {
    addBook({ commit }, book) {
      commit('addBook', book)
    },
  },
})