<template>
    <ion-tabs>
        <slot></slot>
        <ion-tab-bar slot="bottom">
            <ion-tab-button tab="/" href="/" >
                <ion-icon  aria-hidden="true" :icon="triangle" />
                <ion-label>Tab 1</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="/" href="/" >
                <ion-icon aria-hidden="true" :icon="ellipse" />
                <ion-label>Tab 2</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="/" href="/" >
                <ion-icon aria-hidden="true" :icon="square" />
                <ion-label>Tab 3</ion-label>
            </ion-tab-button>
        </ion-tab-bar>
    </ion-tabs>
</template>
<script setup lang="ts">
import { IonTabBar, IonTabButton, IonLabel, IonIcon, IonTabs } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>