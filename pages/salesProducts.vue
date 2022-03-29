<template >
<div>
  <section class="section">
    <button-route></button-route>
    <div class="columns is-mobile">
      <div v-for="(product, index) in products" :key="index">
        <card :title="product.title" :image="product.imageUrl">
          <div class="buttons">
            <b-button type="is-info">
              <NuxtLink to='/inspire'>View More</Nuxtlink>
            </b-button>
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
import Price from '../components/Price.vue'
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'InspirePage',
  computed: {
    products() {
      return this.$store.getters['product/getProducts'];
    },
  },
  mounted() {
    this.fetchProducts();
  },
  components: { ButtonRoute, Card, ButtonBuy, Price },
  methods: {
    ...mapActions('product', ['fetchProducts']),
    ...mapMutations('cart', ['addToCart', 'cleanCart']),
    addProductToCart(product) {
      this.addToCart(product);
    },
  },
}
</script>