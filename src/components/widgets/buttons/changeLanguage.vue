<template>
    <ion-fab slot="fixed" vertical="top" horizontal="start" :edge="true" class="language">
        <ion-fab-button>
            <ion-icon :icon="flag" color="success"></ion-icon>
        </ion-fab-button>
        <ion-fab-list side="bottom">
            <ion-fab-button>
                <ion-icon :icon="document"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
                <ion-icon :icon="colorPalette"></ion-icon>
            </ion-fab-button>
            <ion-fab-button>
                <ion-icon :icon="globe"></ion-icon>
            </ion-fab-button>
        </ion-fab-list>
    </ion-fab>
</template>
<script setup lang="ts">
import { IonIcon } from '@ionic/vue'
import { colorPalette, document, globe, flag } from 'ionicons/icons';
</script>

<style scoped>
ion-fab-button {
    --background: #4f5d03;
}

.language {
    margin-top: 70px;
    background-color: #A2B81F;
    border-radius: 40px;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    display: flex;

}
</style>