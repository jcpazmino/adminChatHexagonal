<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <input v-model="username" type="text" placeholder="Usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Entrar</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '@/services/auth';

const username = ref('');
const password = ref('');
const error = ref(null);
const router = useRouter();

onMounted(() => {
  username.value = '';
  password.value = '';
  error.value = null;
});

const login = async () => {
  try {
    await loginUser(username.value, password.value);
    router.push('/admin');
  } catch (err) {
    error.value = err.message || 'Credenciales inválidas';
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background: #fff;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 10px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error {
  color: #d32f2f;
  margin-top: 8px;
}
</style>
