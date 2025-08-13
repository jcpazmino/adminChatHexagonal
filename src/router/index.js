import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';
import AdminView from '../views/AdminView.vue';
import UserLogin from '../components/UserLogin.vue';

const routes = [
  { path: '/', component: HomeView }, // Ahora privada
  { path: '/chat', component: ChatView },
  { path: '/admin', component: AdminView },
  { path: '/login', component: UserLogin }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Redirección global si no está autenticado
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const token = localStorage.getItem('token');

  if (authRequired && !token) {
    return next('/login');
  }
  next();
});

export default router;
