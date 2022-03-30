<template lang='pug'>
div
  pop-up.cart
  button-route
  card(:product='selectedProduct')
    p.text {{ selectedProduct.description }}
  b-button(@click='addProductToCart()' type='is-danger') Add to cart

</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonRoute from '../components/ButtonRoute.vue'
import PopUp from '../components/PopUp.vue'
export default {
  name: 'shopProduct',
  data(){
    return {}
  },
  computed: {
    ...mapGetters({
      selectedProduct: 'product/getSelectedProduct',
    }),
  },
  methods: {
    ...mapActions('product', ['fetchSelectedProduct']),
    ...mapActions('cart', ['addToCart']),
    addProductToCart() {
      this.addToCart(this.selectedProduct)
    },
  },
  components: {
    ButtonRoute,
    PopUp
  },
}
</script>
<style>
.text {
  font-size: 20px;
}
</style>