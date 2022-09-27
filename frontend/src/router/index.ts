import { createRouter, createWebHistory, type Router } from 'vue-router';
import UserListView from '../views/UserListView.vue';
import UserDetailView from '../views/UserDetailView.vue';

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: UserListView
    },
    {
      path: '/user/:userId',
      component: UserDetailView
    }
  ]
});

export default router;
