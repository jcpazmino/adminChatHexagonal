<template>
  <section class="table-section">
    <table class="products-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.codigo }}</td>
          <td>{{ product.nombre }}</td>
          <td>{{ product.categoria }}</td>
          <td>${{ Number(product.precio).toFixed(2) }}</td>
          <td>{{ product.stock }}</td>
        </tr>
        <tr v-if="products.length === 0">
          <td colspan="5" style="text-align:center; color:#888;">No hay productos disponibles</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProducts } from '@/services/api';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await fetchProducts();
    products.value = response.data?.data?.productos || [];
  } catch (error) {
    products.value = [];
  }
});
</script>

<style scoped>
.table-section {
  padding: 32px;
}
.products-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.products-table th, .products-table td {
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
}
.products-table th {
  background: #f0f0f0;
}
</style>
