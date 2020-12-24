<template>
  <div class="home">
    <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
            <img class="image" :src="carousel.image" />
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      carousels: [
        { text: 'Slide 1', color: 'light', image: require('@/assets/sofa.png') },
        { text: 'Slide 2', color: 'light', image: require('@/assets/sofa2.png') }
      ]
    }
  }
}
</script>


<style scoped lang="scss">
.image { 
    height: 600px;
}
</style>

