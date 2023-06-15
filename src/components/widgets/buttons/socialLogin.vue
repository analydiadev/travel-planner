<template>
    <ion-fab>
        <ion-fab-button v-for="item in icons">
            <ion-icon :icon="item.icon"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>
<script setup lang="ts">
import { IonFab, IonFabButton, IonIcon} from '@ionic/vue';
defineProps({
    icons: Array
})

</script>

<style scoped>

ion-fab{
    display: flex;
    gap: 10px;
}

ion-fab-button {
    --background: #CAE811;
    --color: black;
}
</style>

