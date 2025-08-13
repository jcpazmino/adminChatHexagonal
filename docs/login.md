# Proceso de Login en el Panel Admin (Vue 3)

Este documento describe el proceso de autenticación implementado en el panel de administración, desde la migración a Vue 3 hasta la protección de rutas y el funcionamiento del formulario de login.

---

## 1. Migración y stack
- Migración del proyecto a **Vue 3**.
- Actualización de dependencias: Vue Router 4, Vuex 4, Axios.
- Adaptación de componentes y servicios a la nueva sintaxis.

## 2. Estructura relevante
- `src/components/UserLogin.vue`: Componente de formulario de login.
- `src/services/auth.js`: Servicio para login, logout y obtención de usuario actual.
- `src/router/index.js`: Definición de rutas y protección mediante navegación global.
- `src/store/index.js`: Gestión de estado global (Vuex 4).

## 3. Formulario de login (`UserLogin.vue`)
- Utiliza `<script setup>` y la API de composición de Vue 3.
- Campos de usuario y contraseña siempre vacíos al cargar el formulario.
- Lógica de login:
  - Llama a `loginUser` del servicio `auth.js`.
  - Si la respuesta contiene un `token`, el login es exitoso y redirige a `/admin`.
  - Si falla, muestra mensaje de error.

## 4. Servicio de autenticación (`auth.js`)
- Función `loginUser(username, password)`:
  - Realiza petición POST a `http://localhost:3000/api/auth/login`.
  - Si la respuesta contiene `token`, lo guarda en localStorage.
  - No depende de la propiedad `success: true`.
- Función `getCurrentUser()`:
  - Obtiene el usuario autenticado usando el token.
- Función `logoutUser()`:
  - Elimina el token y realiza logout en el backend.

## 5. Protección de rutas (`router/index.js`)
- Rutas principales: `/`, `/chat`, `/admin`, `/login`.
- Navegación global:
  - Si la ruta no es pública y no hay token, redirige a `/login`.
  - La ruta `/login` es pública.
  - Todas las demás rutas requieren autenticación.
  - La ruta `/` también es privada y redirige al login si no hay token.

## 6. Comportamiento esperado
- Al iniciar la app, si no hay token, se redirige automáticamente a `/login`.
- El usuario ingresa sus credenciales en el formulario.
- Si el login es exitoso (respuesta con token), accede al panel admin.
- Si el login falla, se muestra un mensaje de error.
- El usuario puede cerrar sesión y será redirigido nuevamente al login.

## 7. Referencias
- [README.md](../README.md)
- [docs/arquitectura/panelArquitectura.md](./arquitectura/panelArquitectura.md)
- [docs/planImplementacion.md](./planImplementacion.md)

---

**Última actualización:** Agosto 2025
