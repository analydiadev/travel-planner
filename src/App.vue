<!-- 
  App.vue é oque isntancia toda a aplicação. 
  Ion-router é o controlador de rotas da aplicação,
  ele gerencia qual vai ser o componente/tela a ser
  renderizado dentro do App.vue   
-->
<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import 'swiper/css';
</script>
