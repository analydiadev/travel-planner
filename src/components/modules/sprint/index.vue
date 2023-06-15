<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="main-class">
                <div class="list-titles">
                    <ion-title class="main-title">É um Grande Mundo</ion-title>
                    <ion-title class="second-title">Lá fora, Vá Explorar!</ion-title>
                </div>
                <div class="login-policy">
                    <buttonDefault text="Iniciar" />
                    <ion-title class="privacy-policy">Politica de Privacidade</ion-title>
                </div>
                <changeLanguage />
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonTitle, IonContent } from '@ionic/vue';
import buttonDefault from "@/components/widgets/buttons/default.vue"
import changeLanguage from "@/components/widgets/buttons/changeLanguage.vue"
</script>

<style scoped>
.main-class {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 70px;
}

.list-titles {
    display: flex;
    flex-direction: column;
}

ion-fab-button {
    width: 50px;
    height: 50px;
}

ion-content {
    --background: url("../../../../public/img-app/initial-screen.png") no-repeat center right / cover !important;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-title {
    font-family: var(--font-poppins);
    font-weight: 400;
    font-size: 21px;
    text-align: end;
    color: rgb(0, 0, 0);
}

.second-title {
    font-family: var(--font-poppins);
    font-weight: 700;
    font-size: 30px;
    color: rgb(0, 0, 0);
    white-space: nowrap;
    text-align: end;
}

.login-policy{
    display: flex;
    flex-direction: column;
}

.privacy-policy {
    font-family: var(--font-poppins);
    font-weight: 700;
    font-size: 15px;
}
</style>
  