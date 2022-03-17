<template>
  <section class="section">
     <ButtonRoute/>
     <CarouselSales/>
  </section>
</template>

<script>
import Card from '~/components/Card'
import ButtonRoute from '~/components/ButtonRoute'
import CarouselSales from '../components/CarouselSales.vue'
export default {
  name: 'IndexPage',
  
  components: {
    Card,
    ButtonRoute,
    CarouselSales
  },
}
</script>
