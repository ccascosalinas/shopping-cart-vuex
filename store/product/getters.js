export default {
  getProducts(state) {
    const newArr = state.products.data.data[0].assets.filter((item) => {
      return item.id > 771 && item.id < 776
    })
    return newArr
  },
  getDellProducts(state) {
    return state.dellProducts
  },
  getSelectedProduct(state) {
    return state.selectedDellProduct
  },
}
