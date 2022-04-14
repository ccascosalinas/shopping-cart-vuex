import Products from '@/static/products'
import DellProducts from '@/static/dellProducts'

export default {
  async setProducts({ commit }) {
    const response = await this.$api.media.cloudinaryGet()
    commit('SET_PRODUCTS', response)
  },
  async setDellProducts({ commit }) {
    const response = await this.$api.media.cloudinaryGet()
    const products = DellProducts.map(item => {
     const findAsset = response.data.data[0].assets.find(asset => 
        asset.payload.context.custom.alt === item.title
      )
      return {
        ...item,
        url: findAsset ? findAsset.payload.url: ''
      }
    })
    commit('SET_DELL_PRODUCTS', products)
  },
  fetchSelectedProduct({ commit }, selectedProduct) {
    commit('SET_SELECTED_PRODUCT', selectedProduct)
  },
}
