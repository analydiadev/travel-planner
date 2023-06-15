import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import View1 from '../views/View1.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: View1,
    children: [
      {
        path: '',
        component: () => import('@/components/modules/sprint/index.vue'),
      },
      {
        path: 'login',
        component: () => import('@/components/modules/login/index.vue'),
      },
      {
        path: 'initial',
        component: () => import('@/components/modules/initialscreen/index.vue'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
