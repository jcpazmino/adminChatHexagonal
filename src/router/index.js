import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ChatView from '../views/ChatView.vue';
import AdminView from '../views/AdminView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/chat', component: ChatView },
    { path: '/admin', component: AdminView }
  ]
});
