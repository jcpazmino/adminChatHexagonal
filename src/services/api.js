// api.js - Consumo de APIs backend
import axios from 'axios';

export const sendMessage = (message) => {
  return axios.post('/api/chatbot/messages', { message });
};


export const fetchConversations = () => {
  return axios.get('/api/chatbot/conversations');
};

// Productos endpoints
export const fetchProducts = () => {
  return axios.get('/api/inventory/products');
};

export const fetchProductById = (id) => {
  return axios.get(`/api/inventory/products/${id}`);
};

// Pedidos endpoints
export const fetchOrders = () => {
  return axios.get('/api/orders');  //Devuelve el listado de pedidos
};

export const fetchOrderById = (id) => {
  return axios.get(`/api/orders/${id}`);  //Devuelve los detalles de un pedido//Devuelve la información de un pedido específico 

};

export const fetchOrderItems = (id) => {
  return axios.get(`/api/orders/${id}/items`);  //Devuelve las líneas de pedido asociadas a un pedido

};

export const fetchOrderTracking = (id) => {
  return axios.get(`/api/orders/${id}/tracking`);   //Devuelve el historial de estados para un pedido
};
