import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function loginUser(username, password) {
  const response = await axios.post('/api/auth/login', { username, password });
  // Acepta la respuesta si contiene token
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    // Guardar información adicional del usuario, excluyendo campos no deseados
    const user = response.data.user;
    if (user) {
      const userToStore = {
        user_id: user.user_id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        rol: response.data.rol // si está fuera del objeto user
      };
      localStorage.setItem('user', JSON.stringify(userToStore));
    }
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
  localStorage.removeItem('user');
}
