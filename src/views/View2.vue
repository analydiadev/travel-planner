<template>
    <ion-page>
        <tabsNavigation>
          <ion-router-outlet></ion-router-outlet>
      </tabsNavigation>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import tabsNavigation from '@/components/layouts/tabs-navigation/index.vue'
  import { IonPage, IonRouterOutlet } from '@ionic/vue';
  </script>
  