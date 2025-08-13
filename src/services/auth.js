import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function loginUser(username, password) {
  const response = await axios.post('/api/auth/login', { username, password });
  // Acepta la respuesta si contiene token
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    return response.data;
  } else {
    throw new Error(response.data.message || 'Error de autenticación');
  }
}

export async function getCurrentUser() {
  const token = localStorage.getItem('token');
  const response = await axios.get('/api/auth/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
}

export async function logoutUser() {
  localStorage.removeItem('token');
  await axios.post('/api/auth/logout');
}
