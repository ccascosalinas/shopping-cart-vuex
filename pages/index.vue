<template lang='pug'>
section.section
  h1.subtitle
    b The best computers on the market, choose yours.
  nuxt-link(to='admin/cloudinary')
    button Upload Media
  button-route
  carousel-sales
</template>

<script>
import ButtonRoute from '~/components/ButtonRoute'
import CarouselSales from '../components/CarouselSales.vue'
export default {
  name: 'IndexPage',
  
  components: {
    ButtonRoute,
    CarouselSales
  },
}
</script>
