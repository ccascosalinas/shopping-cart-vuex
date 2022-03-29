export default{
  addToCart({ commit }, product){
    commit('ADD_TO_CART', product)
  },
  cleanCart({ commit }, product){
    commit('CLEAN_CART', product)
  },
  decrementProduct({ commit}, product){
    commit('DECREMENT_PRODUCT', product)
  },
  incrementProduct({ commit }, product){
    commit('INCREMENT_PRODUCT', product)
  },
  deleteProduct({ commit }, product){
    commit('DELETE_PRODUCT', product)
  }
}