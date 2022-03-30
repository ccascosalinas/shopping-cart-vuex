export default{ 
  SET_PRODUCTS(state, payload)  {
    state.products = payload;
},
  SET_DELL_PRODUCTS(state, payload){
    state.dellProducts = payload;
  },
  SET_SELECTED_PRODUCT(state, payload){
    state.selectedDellProduct = payload
  }
}