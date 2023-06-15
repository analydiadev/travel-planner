<template>
  <swiper
    :slides-per-view="3.5" :space-between="10" :pagination="{
      clickable: true,
    }" :modules="modules" class="slides">
    <swiper-slide v-for="item in titles">
    <ion-label v-if="item.title != 'populares'">{{ item.title }}</ion-label>
    <ion-label v-else class="populares">{{ item.title }}</ion-label>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import {  } from "@ionic/vue";
const modules = [Pagination];

const titles = [
  {
    title: "todos",
  },
  {
    title: "populares",
  },
  {
    title: "mais vistos",
  },
  {
    title: "recomendados",
  },
];
</script>
<style scoped>

.slides {
  color: #bbb9b9;
  font-family: var(--font-poppins);
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  white-space: nowrap;
  text-align: center;
}

.populares {
  color: black;
}
</style>
