<template>
    <section>
        <div class="buttons is-right">
          <img class="shopShow" src="https://cdn-icons-png.flaticon.com/512/107/107831.png" alt="">
            <b-button 
                label="Show purchases"
                type="is-primary"
                size="is-medium"
                @click="isCardModalActive = true" />
        </div>

        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                  <h1 class="subtitle"><b>Add products to cart</b></h1>
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Total:0</p>
                            
                        </div>
                    </div>

                    <div class="content">
                        <b-button type="is-info is-light">Total ($0.00)</b-button>
                        <b-button type="is-danger" icon-left="delete">
                          Erase everything
                         </b-button>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                isImageModalActive: false,
                isCardModalActive: false
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
}
.title{
  text-align: center;
  padding: 25px;
}
</style>