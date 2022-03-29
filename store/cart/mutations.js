export default{ 
  ADD_TO_CART  (state, product) {
  const findProductInCart = state.cart.find((item) => item.id == product.id)
  if (findProductInCart) {
    alert('Already on your cart')
  } else {
    state.cart.push({ ...product, quantity: 1 })
    alert('Product added to your cart')
  }},

 CLEAN_CART(state){
  state.cart = [];
},

 DECREMENT_PRODUCT(state, product){
  const findProductInCart = state.cart.find((item) => item.id == product.id)
  if(findProductInCart && findProductInCart.quantity > 1){
    findProductInCart.quantity--; 
  } else {
    const filtered = state.cart.filter(prod =>
      prod.id != product.id
    )
    state.cart = filtered;
  } 
},

INCREMENT_PRODUCT(state, product){
  const findProductInCart = state.cart.find((item) => item.id == product.id)
  if(findProductInCart && findProductInCart.quantity < product.stock){
    findProductInCart.quantity++;
  } else{
    alert(`Only ${product.stock} units of this item left in inventory`)
  }
},

DELETE_PRODUCT(state, product){
  const findProductInCart = state.cart.find((item) => item.id == product.id)
  if(findProductInCart){
    const filtered = state.cart.filter(prodSelect =>
      prodSelect.id != product.id)
      state.cart = filtered
  }
}
}
