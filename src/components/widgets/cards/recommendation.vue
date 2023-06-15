<template>
    <ion-card>
        <img :src= img >
        <ion-icon :icon="heart" class="favorite" ></ion-icon>
        <ion-card-header>
            <ion-card-title>{{ cardTitle }} <span><ion-icon :icon="star" class="rant"></ion-icon>{{ avaliation }}</span></ion-card-title>
        </ion-card-header>
        <ion-card-content><ion-icon :icon="location"></ion-icon>{{ cardContent }}</ion-card-content>
    </ion-card>
</template>
<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent} from '@ionic/vue';
import { location, star, heart } from 'ionicons/icons';
import { IonIcon } from '@ionic/vue';

defineProps(
    {
        img: String,
        cardTitle: String,
        avaliation: String,
        cardContent: String
    }
)
</script>
<style scoped>
ion-card {
    background: #FFFEFE;
    width: 190px;
    text-align: center;
    position: relative;
    border-radius: 16px;
}

span{
    color: #39414B;
    font-size: 15px;
}
img {
    width: 80%;
    margin-top: 20px;
}

ion-card-title {
    font-family: var(--font-poppins);
    color: #050505ee;
    font-weight: 400;
    font-size: 20px;
    white-space: nowrap;
}

.rant {
    color: #FFAD33;
}

ion-icon {
    color: #999999;
}
.favorite{
    color: red;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 20px;
    position: absolute;
    margin-top: 15px;
    right: 5%;
}

ion-card-content {
    font-family: var(--font-poppins);
    font-size: 15px;
    text-align: left;
    white-space: nowrap;
}</style>