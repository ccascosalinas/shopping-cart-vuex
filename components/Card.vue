<template lang='pug'>
div
  .column
  .card
    header.card-header
      p.card-header-title.has-text-grey
        | {{ title }}
    .card-content
      .content.has-text-centered
        img(:src='image' alt='')
    footer.card-footer
      .card-footer-item
        span
          slot
</template>

<script>
export default {
  name: 'BuefyCard',
  data(){
    return {
     
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    image: {
      type: String,
      default: '',
      required: true,
    }
  },
}
</script>
