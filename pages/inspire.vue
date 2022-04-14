<template lang='pug'>
div
  section.section
    pop-up.cart
    button-route
    .columns.is-mobile
      .img.m-2(v-for='(product, index) in dellProducts')
        .card(:key='index')
          nuxt-link(to='InfoProduct')
            div(@click='fetchSelectedProduct(product)')
              header.card-header
                p.card-header-title.has-text-grey {{ product.title }}
              .card-content
                //nuxt-link(to='InfoProduct')
                .content.has-text-centered
                  img(:src='product.url', alt='')
            footer.card-footer
              .card-footer-item
          //- card(:product='product' :key='index')
          //-   .buttons
          h1.m-2 In stock {{ product.stock }}
          //- b-button(@click='fetchSelectedProduct(product)' type='is-info')
          //-   nuxt-link.preview(to='InfoProduct') Preview
          price(:price='product.price')
          b-button(@click='addProductToCart(product)', type='is-danger') Add to cart
</template>

<script>
import axios from 'axios'
import ButtonRoute from '../components/ButtonRoute.vue'
import Card from '../components/Card.vue'
import Price from '../components/Price.vue'
import PopUp from '../components/PopUp.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'InspirePage',
  async fetch({ store }){
    await store.dispatch('product/setDellProducts')
  },
  components: { ButtonRoute, Card, Price, PopUp },
  methods: {
    ...mapActions('product', [
      'setProducts',
      'setDellProducts',
      'fetchSelectedProduct',
      
    ]),
    ...mapActions('cart', ['addToCart', 'cleanCart']),

    addProductToCart(product) {
      this.addToCart(product)
    },
  },
   computed: {
    ...mapGetters({
      dellProducts: 'product/getDellProducts',
      selectedProduct: 'product/getSelectedProduct',
  
    }),
  },
}
</script>
<style>
.preview {
  color: white;
}
</style>