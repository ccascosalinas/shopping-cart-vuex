<template lang='pug'>
div
  section.main-content.columns.m-1
    aside.row.is-2
      p.menu-label.is-hidden-touch General
      ul.menu-list
        li(v-for='(item, key) of items' :key='key')
          nuxt-link(:to='item.to' exact-active-class='is-active')
            b-icon(:icon='item.icon')
            | {{ item.title }}
</template>
<script>
export default {
  name: 'ButtonRoute',
  data(){
    return {
       items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Sales',
          icon: 'lightbulb',
          to: { name: 'salesProducts' },
        },
        {
          title: 'My cart',
          icon: 'cart',
          to: { name: 'myCart' }
        }
      ],
    }
  }
}
</script>
<style>
.subtitle{

font-size: 35px;
text-align: center;
}
</style>