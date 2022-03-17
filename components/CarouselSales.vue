<template>
    <b-carousel>
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
            <section :class="`hero is-small is-${carousel.color}`">
                <div class="hero-body has-text-centered">
                    <h1 class="title">{{carousel.text}}</h1>
                    <img class="img" :src="carousel.img">
                </div>
            </section>
        </b-carousel-item>
    </b-carousel>
</template>

<script>
export default {
  name:'CarouselSales',
    data(){
        return {
            carousels: [
                { text: 'Laptop Lenovo', color: 'primary', img:'https://cazaofertas.com.mx/wp-content/uploads/2020/03/Office-Deport-casa-230320-17.jpg' },
                { text: 'Tablet Huawei', color: 'info', img:'https://cazaofertas.com.mx/wp-content/uploads/2020/03/Office-Deport-casa-230320-11.jpg' },
                { text: 'PC HP', color: 'success', img:'https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118580342_3534641193215620_410040136906754013_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=xAP1ht1qp_gAX-SDHC9&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT8_eDIpQD3D0czzYcpkCX3a5m6v9WHqVzqkqsbKhPkmJQ&oe=62561389' },
                { text: 'Laptop Acer', color: 'warning', img: 'https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118496191_3534641196548953_2579624928895841810_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=GDLSix6rQM4AX8LJ2Os&tn=sInLkAJ432iHYSnG&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT-a7PyyiRw-7chyHeBGoWr56MsSAHmuIcfwoigdJ1GL4g&oe=6256FF8D' },
                { text: 'Laptop Dell', color: 'danger', img:'https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118125535_3534644083215331_154492883095160488_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=BNMRBHYZm0oAX-IxXEn&tn=sInLkAJ432iHYSnG&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT8GTvjQhF4PPGmiv7nxEsRZ7sqjDCR32FmUn9ocbzDwPA&oe=62573CF9' },
                { text: 'Laptop Dell', color: 'info', img: 'https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/118771674_3534644079881998_2814810821882878385_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=Bvv-I4F7W34AX98xMj6&_nc_ht=scontent.ftgu1-2.fna&oh=00_AT9Cd68b1tsp8CVfUhMlAYZmwmhtR3VVqvpVzOinORVM5w&oe=6256C411'}
            ]
        }
    }
}
</script>
<style>
.img{
    width: 380px;
}
</style>