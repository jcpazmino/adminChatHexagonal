<template>
  <div class="dashboard">
    <Sidebar @selectSection="handleSectionChange" />
    <main class="main-content">
    <header class="header">
        <span>{{ section === 'productos' ? 'Productos' : section === 'pedidos' ? 'Pedidos' : '' }}</span>
        <div class="user-info">
        <span>{{ username }}</span>
        <a @click="handleLogout" class="logout" title="Cerrar Sesión">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
        </a>
        </div>
    </header>
    <section class="table-section">
        <Productos v-if="section === 'productos'" />
        <Pedidos v-else-if="section === 'pedidos'" />
    </section>
    <footer class="footer">
        Juan Carlos Pazmiño R. - 2025
    </footer>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { logoutUser } from '@/services/auth';
import { ref, onMounted } from 'vue';

import Sidebar from './dashboard/Sidebar.vue';
import Productos from './auxiliarVentas/Productos.vue';
import Pedidos from './auxiliarVentas/Pedidos.vue';

const router = useRouter();
const username = ref('');

onMounted(() => {
  const user = localStorage.getItem('user');
  if (user) {
    try {
      username.value = JSON.parse(user).username;
    } catch {
      username.value = '';
    }
  }
});

const section = ref('productos');
const handleSectionChange = (value) => {
  section.value = value;
};

const handleLogout = async () => {
  await logoutUser();
  router.push('/login');
};
</script>

<style scoped>
.dashboard {
  display: flex;
  min-height: 100vh;
  background: #f7f6f2;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1.2rem;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.logout {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.logout i {
  color: #222;
}

.footer {
  margin-top: auto;
  padding: 16px 32px;
  background: #fff;
  text-align: right;
  font-size: 0.95rem;
  color: #888;
}
</style>
