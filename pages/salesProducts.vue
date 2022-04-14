<template lang='pug'>
div
  section.section
    button-route
    .columns.is-mobile
      .img.m-2(v-for='(product, index) in products', :key='index')
        card(:product='product')
          .buttons
            b-button(type='is-info')
              nuxt-link.more(to='/inspire') View More
</template>

<script>
import axios from 'axios'
import ButtonRoute from '../components/ButtonRoute.vue'
import Card from '../components/Card.vue'
import ButtonBuy from '../components/ButtonBuy.vue'
import Price from '../components/Price.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'InspirePage',
  async fetch({ store }) {
    await store.dispatch('product/setProducts')
  },
  components: { ButtonRoute, Card, ButtonBuy, Price },
  methods: {
    ...mapActions('product', ['setProducts']),
    ...mapActions('cart', ['addToCart', 'cleanCart']),
    addProductToCart(product) {
      this.addToCart(product)
    },
  },
  computed: {
    ...mapGetters({
      products: 'product/getProducts',
    }),
  },
}
</script>

<style>
.img {
  width: 400px;
}
.more {
  color: rgb(255, 255, 255);
}
</style>