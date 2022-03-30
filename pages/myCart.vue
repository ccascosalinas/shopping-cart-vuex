<template lang='pug'>
div
  button-route
  modal-shop
</template>
<script>
import ButtonRoute from '~/components/ButtonRoute'
import ModalShop from '~/components/ModalShop'
import PopUp from '~/components/PopUp'
export default {
  components: {
    ButtonRoute,
    ModalShop,
    PopUp
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