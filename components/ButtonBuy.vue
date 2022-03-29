<template lang='pug'>
div
  b-button.buy(@click='onClick', type='is-danger') Buy
</template>
<script>
export default {
  name: 'ButtonBuy',
  emits: ['on-click'],
  methods: {
    onClick() {
      this.$emit('on-click')
    },
  },
}
</script>
<style>
.buy {
  padding: 20px;
}
</style>