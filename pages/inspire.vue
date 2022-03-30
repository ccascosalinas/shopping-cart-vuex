<template lang='pug'>
div
  section.section
    pop-up.cart
    button-route
    .columns.is-mobile
      .img.m-2(v-for='(product, index) in dellProducts' :key='index')
        card(:title='product.title' :image='product.imageUrl')
          .buttons
            h1.m-2 In stock {{ product.stock }}
            b-button(@click='fetchSelectedProduct(product)' type='is-info')
              nuxt-link.preview(to='InfoProduct') Preview
            price(:price='product.price')
</template>

<script>
import ButtonRoute from '../components/ButtonRoute.vue'
import Card from '../components/Card.vue'
import ButtonBuy from '../components/ButtonBuy.vue'
import Price from '../components/Price.vue'
import PopUp from '../components/PopUp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'InspirePage',
  computed: {
    ...mapGetters({
      dellProducts: 'product/getDellProducts',
    }),
  },
  mounted() {
    this.fetchDellProducts()
  },
  components: { ButtonRoute, Card, ButtonBuy, Price, PopUp },
  methods: {
    ...mapActions('product', [
      'fetchProducts',
      'fetchDellProducts',
      'fetchSelectedProduct',
    ]),
    ...mapActions('cart', ['addToCart', 'cleanCart']),
    addProductToCart(product) {
      this.addToCart(product)
    },
  },
}
</script>
<style>
.preview {
  color: white;
}
</style>