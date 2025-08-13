<template>
  <aside class="sidebar">
    <h2>Chatbot Auxiliar Ventas</h2>
    <nav>
      <ul>
        <li><b>Ventas</b>
          <ul>
            <li><a href="#" @click.prevent="emit('selectSection', 'productos')">Productos</a></li>
            <li><a href="#" @click.prevent="emit('selectSection', 'pedidos')">Pedidos</a></li>
          </ul>
        </li>
        <li><b>Tablas</b>
          <ul>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Documentos</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
    const emit = defineEmits(['selectSection']);
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e0e0e0;
  padding: 0px 16px;
}
.sidebar h2 {
  font-size: 1.2rem;
  margin-bottom: 24px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar ul li {
  margin-bottom: 16px;
}
.sidebar ul li ul {
  margin-top: 8px;
  margin-left: 16px;
}
.sidebar a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
}

nav {
  margin-top: 80px;
}
</style>
