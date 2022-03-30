<template lang='pug'>
div
  button-route
  card(:title='selectedProduct.title' :image='selectedProduct.imageUrl')
    p.text {{ selectedProduct.description }}
  button-buy(@on-click='addProductToCart()')

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonBuy from '../components/ButtonBuy.vue'
import ButtonRoute from '../components/ButtonRoute.vue'
export default {
  name: 'shopProduct',
  computed: {
    ...mapGetters({
      selectedProduct: 'product/getSelectedProduct',
    }),
  },
  mounted() {},
  methods: {
    ...mapActions('product', ['fetchSelectedProduct']),
    ...mapActions('cart', ['addToCart']),
    addProductToCart() {
      this.addToCart(this.selectedProduct)
    },
  },
  components: {
    ButtonRoute,
    ButtonBuy,
  },
}
</script>
<style>
.text {
  font-size: 20px;
}
</style>