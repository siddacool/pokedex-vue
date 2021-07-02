import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/:id',
    name: 'Details',
    component: defineAsyncComponent(() => import('pages/Details.vue')),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
