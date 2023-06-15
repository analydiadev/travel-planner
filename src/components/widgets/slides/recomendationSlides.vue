<template>
  <swiper
    :slides-per-view="2" :space-between="40" :pagination="{
      clickable: true,
    }" :modules="modules">
    <swiper-slide v-for="a of array">
      <recommendation img="../../../../public/img-app/japan.png" card-title="Portoes Torri" avaliation="4.8" card-content="Miyajima, Japão">{{ a.card }}</recommendation>  
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper'
import recommendation from '../cards/recommendation.vue';
const modules = [Pagination]

const array: any[] = [
  {
    card: String
  },
  {
    card: String
  },
  {
    card: String
  },
  {
    card: String
  },

]
</script>
<style scoped>

</style>