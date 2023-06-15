<template>
    <ion-header collapse="fade">
        <ion-toolbar>
            <ion-title class="complimentsUser">Oi <span class="nameUser">Marizinha,</span> </ion-title>
            <ion-buttons slot="secondary">
                <ion-button class="ion-activatable ripple-parent circle">
                    <ion-icon :icon="mailUnread"></ion-icon>
                </ion-button>
                <ion-thumbnail>
                    <img src="../../../../public/img-app/icon-perfil.png">
                </ion-thumbnail>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>
<script setup lang="ts">
import { IonHeader, IonToolbar, IonButton, IonIcon, IonThumbnail, IonTitle } from '@ionic/vue';
import { mailUnread } from 'ionicons/icons';
</script>
<style scoped>
ion-header{
    position: static;
}
ion-toolbar {
    --background: #ADC806;
    height: 100px;
    display: flex;
}

.complimentsUser {
    color: black;
    font-family: var(--font-poppins);
    font-size: 20px;
    font-weight: 300;
    margin-left: 20px;
}

.nameUser {
    font-family: var(--font-poppins);
    font-weight: bold;
    font-size: 20px;
    color: black;
}

ion-icon {
    background: #90A609;
    padding: 5px;
    border-radius: 70%;
}

.ripple-parent {
    position: relative;
    overflow: hidden;
}

.circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>