<template lang='pug'>
div
  button-route
  modal-shop
</template>
<script>
import ButtonRoute from '~/components/ButtonRoute'
import ModalShop from '~/components/ModalShop'
export default {
  components: {
    ButtonRoute,
    ModalShop,
  }
}
</script>
<style>
.cart{
  position: absolute;
  top: 95px;
  right:20px ;

}
</style>