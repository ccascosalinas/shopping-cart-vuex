<template>
  <div>
    <ModalShop :cart="cart" @clean-cart="cleanCart" />
    <section class="section">
      <ButtonRoute />
      <div class="columns is-mobile">
        <div v-for="(product, index) in products" :key="index">
          <card :title="product.title" :image="product.imageUrl">
            <div class="buttons">
              <ButtonBuy @on-click="addToCart(product)" />
              <Price :price="product.price" />
            </div>
          </card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonRoute from '../components/ButtonRoute.vue'
import Card from '../components/Card.vue'
import ButtonBuy from '../components/ButtonBuy.vue'
import ModalShop from '../components/ModalShop.vue'
import Price from '../components/Price.vue'
import Products from '../store/products'
export default {
  name: 'InspirePage',
  data() {
    const products = Products
    return {
      products,
      cart: [],
    }
  },
  components: { ButtonRoute, Card, ButtonBuy, ModalShop, Price },
  methods: {
    addToCart(product) {
      const findProductInCart = this.cart.find((item) => item.id == product.id)
      if (findProductInCart) {
        this.cart.forEach((item) => {
          if (item.id == product.id) {
            item.quantity++
          }
        })
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      alert('New product to card')
    },
    cleanCart() {
      this.cart = []
    },
  },
}
</script>
