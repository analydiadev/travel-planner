<template>
  <ion-content>
    <div class="main">
      <ion-title class="main-title">Para aonde você quer ir?</ion-title>
      <search />
      <ion-title class="main-title">Explore Destinos</ion-title>
      <slidesDes/>
      <recomendationSlides/>
    </div>
  </ion-content>
</template>
<script setup lang="ts">
import { IonContent, IonTitle } from "@ionic/vue";
import search from "../search/search.vue";
import recomendationSlides from "../slides/recomendationSlides.vue";
</script>
<style scoped>
ion-content {
  --background: #adc806;
  width: 100%;
  height: 100%;
}
.main {
  background: rgb(255, 255, 255);
  border-radius: 25px 25px 0 0;
  height: 100%;
  width: 100%;
}

.main-title {
  color: black;
  font-family: var(--font-poppins);
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
