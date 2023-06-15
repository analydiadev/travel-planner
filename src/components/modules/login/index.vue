<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="mainDiv">
                <arrowBack rota="/" />
                <div class="content">
                    <ion-title class="main-title">Entrar</ion-title>
                    <div class="social">
                        <socialLogin :icons="newArray" />
                    </div>
                    <ion-title class="second-title">Ou</ion-title>
                </div>
                <form>
                    <ion-item>
                        <ion-label>Email</ion-label>
                        <ion-input type="email"></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Senha</ion-label>
                        <ion-input type="password"></ion-input>
                    </ion-item>
                    <div class="forgot-password">
                        <ion-title>Esqueceu a senha?</ion-title>
                    </div>
                    <buttonDefault text="Entrar" />
                </form>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import arrowBack from '@/components/widgets/arrow/arrowBack.vue';
import { IonContent, IonTitle, IonItem, IonLabel, IonInput } from '@ionic/vue';
import socialLogin from '@/components/widgets/buttons/socialLogin.vue';
import { logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';
import buttonDefault from '@/components/widgets/buttons/default.vue';

const newArray: any[] = [
    {
        icon: logoGoogle
    },
    {
        icon: logoFacebook
    },
    {
        icon: logoApple
    }
]
</script>
<style scoped>
.content {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.social {
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainDiv {
    flex-direction: column;
    display: flex;
    background-image: url('../../../../public/img-app/login.png');
    background-repeat: no-repeat;
    background-size: 200% 70%;
    width: 100%;
    height: 100%;
    background-color: #230b05;
    justify-content: space-around;
    gap: 70px
}

.main-title {
    font-family: var(--font-poppins);
    font-size: 32px;
    font-weight: bold;
}

.second-title {
    font-family: var(--font-poppins);
    font-size: 15px;
    font-weight: bold;
}

form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 125px;
}

ion-item {
    width: 300px;
    height: 70px;
    color: black;
    --background: #ffff;
    --border-radius: 20px;

}

.forgot-password {
    width: 95%;
}

.forgot-password ion-title {
    font-family: var(--font-poppins);
    font-weight: 300;
    font-size: 15px;
    text-align: end;

}
</style>