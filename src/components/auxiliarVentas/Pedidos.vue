<template>
  <section class="table-section">
    <table class="orders-table">
      <thead>
        <tr>
          <th>Número Pedido</th>
          <th>Fecha Pedido</th>
          <th>Estado</th>
          <th>Total</th>
          <th>Fecha Creación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.numero_pedido }}</td>
          <td>{{ formatDate(order.fecha_pedido) }}</td>
          <td>{{ order.estado }}</td>
          <td>${{ Number(order.total).toFixed(2) }}</td>
          <td>{{ formatDate(order.fecha_creacion) }}</td>
        </tr>
        <tr v-if="orders.length === 0">
          <td colspan="5" style="text-align:center; color:#888;">No hay pedidos disponibles</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchOrders } from '@/services/api';

const orders = ref([]);

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleString();
}

onMounted(async () => {
  try {
    const response = await fetchOrders();
    // Ajuste: la lista de pedidos puede estar en response.data.data.pedidos o response.data (según API)
    orders.value = response.data?.data?.pedidos || response.data?.pedidos || response.data || [];
  } catch (error) {
    orders.value = [];
  }
});
</script>

<style scoped>
.table-section {
  padding: 32px;
}
.orders-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.orders-table th, .orders-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}
.orders-table th {
  background: #f0f0f0;
}
</style>
