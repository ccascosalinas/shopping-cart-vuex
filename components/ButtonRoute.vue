<template>
<div>
  <h1 class="subtitle"> <b>The best computers on the market, choose yours.</b></h1>
  <section class="main-content columns m-1">
      <aside class="row is-2">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>
    </section>
</div>
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
          title: 'Shop',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
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