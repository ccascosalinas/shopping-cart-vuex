<template lang='pug'>
section
  .buttons
    img.m-1(src='https://www.pngplay.com/wp-content/uploads/7/Cart-Icon-Background-PNG-Image.png' width='60px' alt='')
    b-button(label='Show purchease' type='is-primary' size='is-medium' @click='isCardModalActive = true')
  b-modal(v-model='isImageModalActive')
    p.image.is-4by3
      img(src='/static/img/placeholder-1280x960.png')
  b-modal(v-model='isCardModalActive' :width='640' scroll='keep')
    .card
      .card-content
        h1.subtitle
          b Your Cart
        .media 
         .media-content(v-for='(item, index) in cart' :key='index')
          p.title.is-4 {{ item.title }}
          p.subtitle.is-4
            span
              b-button(@click='decrement(item)' type='is-info') -
            |               Quantity: {{ item.quantity }}
            span
              b-button(@click='increment(item)' type='is-info') +
            span
              b-button(@click='deleteProduct(item)' type='is-danger') Delete
          p.subtitle.is-4
            | Total: $ {{ item.quantity * item.price }}
      .content
        b-button(type='is-info is-light') Total ${{ totalCost.total }}
        b-button(@click='cleanCart' type='is-danger' icon-left='delete') Erase everything
            
        .content
</template>

 <script>
import { mapMutations } from 'vuex'
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
  },
  methods: {
    ...mapMutations('cart', [
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
    deleteProduct(product){
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
