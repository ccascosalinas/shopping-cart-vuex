<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <img :src="image" alt="">
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BuefyCard',
  data(){
    return {
     
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true,
    },
    image: {
      type: String,
      default: '',
      required: true,
    }
  },
}
</script>
