<template>
    <ion-button @click="goToLogin()" class="initial-button">{{ text }}</ion-button>
</template>
<script setup lang="ts">
import { IonButton } from '@ionic/vue';
import router from '../../../router/index';

function goToLogin(){
    router.push('/login')
}

defineProps({
    text: String
})

</script>
<style scoped >
.initial-button {
    --background: #CAE811;
    font-family: var(--font-poppins);
    font-weight: 700;
    size: 24px;
    color: black;
    width: 319px;
    height: 57px;
    --border-radius: 13px;
}
</style>