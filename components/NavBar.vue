<template lang='pug'>
div
  nav.navbar.header.has-shadow.is-info.is-block(role='navigation' aria-label='main navigation')
    h1.title
      span
        img.shop(src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='')
      b  Office Depot
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {},
}
</script>
<style>
.title {
  color: #fff;
  text-align: center;
  padding-top: 0px;
  font-size: 58px;
}
.shop {
  width: 50px;
  text-align: center;
}
</style>