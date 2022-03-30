<template lang='pug'>
section
  .buttons
    img.m-1(src='https://cdn-icons-png.flaticon.com/512/107/107831.png' width='60px' alt='')
    b-button(label='Show purchease' type='is-primary' size='is-medium' @click='isCardModalActive = true')
    b-button(type='is-success') {{ totalProducts.totalProd }}
  b-modal(v-model='isImageModalActive')
    p.image.is-4by3
      img(src='/static/img/placeholder-1280x960.png')
  b-modal(v-model='isCardModalActive' :width='640' scroll='keep')
    .card
      .card-content
        h1.subtitle
          b Your Cart
          p.subtitle.is-5 Total products: {{ totalProducts.totalProd }}
        .media 
         .media-content(v-for='(item, index) in cart' :key='index')
          p.title.is-6 {{ item.title }}
          p.subtitle.is-5
            span
              h1.subtitle.is-6 In stock {{ item.stock - item.quantity }}
            span
              b-button(@click='decrement(item)' type='is-info') -
            |               Quantity: {{ item.quantity }}
            span
              b-button(@click='increment(item)' type='is-info') +
            span
              b-button(@click='removeProduct(item)' type='is-danger') Delete
          p.subtitle.is-6
            | Total: $ {{ item.quantity * item.price }}
      .content
        b-button(type='is-info is-light') Total ${{ totalCost.total }}
        b-button(@click='cleanCart' type='is-danger' icon-left='delete') Erase everything
            
        .content
</template>

 <script>
import { mapActions } from 'vuex'
export default {
  emits: ['clean-cart'],
  data() {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
    }
  },
  computed: {
    cart() {
      return this.$store.getters['cart/getCart']
    },
    totalCost() {
      let total = 0
      this.cart.forEach((item) => (total += item.quantity * item.price))
      return {
        total,
      }
    },
    totalProducts(){
      let totalProd = 0
      this.cart.forEach((item) => (totalProd += item.quantity))
      return {
        totalProd,
      }
    }
  },
  methods: {
    ...mapActions('cart', [
      'decrementProduct',
      'incrementProduct',
      'cleanCart',
      'deleteProduct'
    ]),

    decrement(product) {
      this.decrementProduct(product)
    },
    increment(product) {
      this.incrementProduct(product)
    },
    removeProduct(product){
      this.deleteProduct(product)
    }
  },
}
</script>
<style>
.shopShow {
  width: 60px;
}
.media-content {
  background-color: #48c78e;
  margin: 2px;
}
.title {
  text-align: center;
  padding: 10px;
}
</style>
}
