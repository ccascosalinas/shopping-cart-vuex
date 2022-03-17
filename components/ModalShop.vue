<template lang='pug'>
div    
    section
        .buttons.is-right
            img.shopShow(src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='')
            b-button(label='Show purchases' type='is-primary' size='is-medium' @click='isCardModalActive = true')
    b-modal(v-model='isCardModalActive' :width='640' scroll='keep')
        .card
            .card-content
                h1.subtitle
                    b Your Cart
                .media
                    .media-content(v-for='(item,index) in cart' :key='index')
                        p.title.is-4  {{item.title}} 
                        p.subtitle.is-4 Quantity: {{item.quantity}} 
                        p.subtitle.is-4 Total: $ {{item.quantity * item.price}}
                .content
                    b-button(type='is-info is-light') Total ${{totalCost.total}}
                    b-button(@click='cleanCart' type='is-danger' icon-left='delete')
                        | Erase everything
</template>

<script>
    export default {
        props: {
            cart: {
                type: Array,
                default: [],
                required: true
            }
        },
        emits: ['clean-cart'],
        data() {
            return {
                isImageModalActive: false,
                isCardModalActive: false
            }
        },
        computed: {
            totalCost() {
                let total = 0
                this.cart.forEach(item => total += item.quantity * item.price)
                return {
                    total
                }
            }
        },
        methods: {
            cleanCart() {
                this.$emit('clean-cart')
            }
        }
    }
</script>
<style>
.shopShow{
  width: 60px;
}
.media-content{
  background-color: #48c78e;
  margin: 2px;
}
.title{
  text-align: center;
  padding: 10px;
}
</style>