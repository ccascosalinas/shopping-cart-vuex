<template lang='pug'>
b-message.is-small(type='is-info')
  h1.price ${{ price }}


</template>
<script>
export default {
  name: 'PriceMessage',
  props: {
    price: {
      type: Number,
      default: 0,
      required: true,
    },
  },
}
</script>
<style>
.price {
  background-color: #ecf4fe;
  font-size: 14px;
}
</style>
