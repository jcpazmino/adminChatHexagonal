// api.js - Consumo de APIs backend
import axios from 'axios';

export const sendMessage = (message) => {
  return axios.post('/api/chatbot/messages', { message });
};

export const fetchConversations = () => {
  return axios.get('/api/chatbot/conversations');
};
