import axios from 'axios';

export async function loginUser(username, password) {
  const response = await axios.post('/api/auth/login', { username, password });
  if (response.data.success) {
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
