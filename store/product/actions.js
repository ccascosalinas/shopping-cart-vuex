import Products from '@/static/products'
import DellProducts from '@/static/dellProducts'

export default {
  fetchProducts({ commit }) {
    const products = Products
    commit('SET_PRODUCTS', products)
  },
  fetchDellProducts({ commit }) {
    const dellProducts = DellProducts
    commit('SET_DELL_PRODUCTS', dellProducts)
  },
}
