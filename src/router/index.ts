import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('pages/Home.vue'),
  },
  {
    path: '/details',
    name: 'Details Nope',
    redirect: { name: 'Home' },
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: defineAsyncComponent(() => import('pages/Details.vue')),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
