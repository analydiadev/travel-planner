<template>
        <ion-icon @click="goToBack()" :icon="arrowBack" size="large" class="arrow"></ion-icon>
</template>
<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { arrowBack } from 'ionicons/icons';
import router from '../../../router/index';

function goToBack(){
    router.push("/")
}
</script>
<style scoped>

.arrow {
    margin-left: 20px;
    margin-top: 20px;
}
</style>