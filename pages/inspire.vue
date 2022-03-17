<template>
<div>
  <ModalShop/>
  <section class="section">
    <ButtonRoute/>
   <div class="columns is-mobile">
      <card title="Laptop Lenovo" image="https://cazaofertas.com.mx/wp-content/uploads/2020/03/Office-Deport-casa-230320-17.jpg"> 
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>

      <card title="Tablet Huawei" image="https://cazaofertas.com.mx/wp-content/uploads/2020/03/Office-Deport-casa-230320-11.jpg">
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>

      <card title="PC HP" image="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118580342_3534641193215620_410040136906754013_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=xAP1ht1qp_gAX-SDHC9&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT8_eDIpQD3D0czzYcpkCX3a5m6v9WHqVzqkqsbKhPkmJQ&oe=62561389">
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>

      <card title="Laptop Acer" image="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118496191_3534641196548953_2579624928895841810_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=GDLSix6rQM4AX8LJ2Os&tn=sInLkAJ432iHYSnG&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT-a7PyyiRw-7chyHeBGoWr56MsSAHmuIcfwoigdJ1GL4g&oe=6256FF8D">
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>

      <card title="Laptop Dell" image="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118125535_3534644083215331_154492883095160488_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=BNMRBHYZm0oAX-IxXEn&tn=sInLkAJ432iHYSnG&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT8GTvjQhF4PPGmiv7nxEsRZ7sqjDCR32FmUn9ocbzDwPA&oe=62573CF9">
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>

      <card title="Laptop Dell" image="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118771674_3534644079881998_2814810821882878385_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=Bvv-I4F7W34AX98xMj6&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT9Cd68b1tsp8CVfUhMlAYZmwmhtR3VVqvpVzOinORVM5w&oe=6256C411">
      <div class="buttons">
      <ButtonBuy/>
      <Price/>
      </div>
      </card>
    </div> 
  </section>
</div>
</template>

<script>
import ButtonRoute from '../components/ButtonRoute.vue'
import Card from '../components/Card.vue'
import ButtonBuy from '../components/ButtonBuy.vue'
import ModalShop from '../components/ModalShop.vue'
import Price from '../components/Price.vue'
export default {
  name: 'InspirePage',
  data(){
    return{
       
    }
  },
  components: { ButtonRoute, Card, ButtonBuy, ModalShop, Price },
}
</script>
