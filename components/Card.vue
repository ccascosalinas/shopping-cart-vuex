<template lang='pug'>
div
  .card
    header.card-header
      p.card-header-title.has-text-grey {{ product.title }}
    .card-content
        .content.has-text-centered
          img(:src='product.imageUrl' alt='')
    footer.card-footer
      .card-footer-item
        span
          slot
</template>

<script>
export default {
  name: 'BuefyCard',
  data() {
    return {}
  },
  props: {
   product: {
     type: Object,
     required: true,
     default(){
       return {}
     }
   },
   mounted(){
     console.log(this.product)
   }
    },
}
</script>
