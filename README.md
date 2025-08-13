# adminChatHexagonal

Frontend para el chatHexagonal.

## Migración y stack
- Migrado a **Vue 3**
- Vue Router 4 y Vuex 4
- Axios para consumo de APIs

## Estructura principal
- `src/components/UserLogin.vue`: formulario de autenticación
- `src/services/auth.js`: servicio de login, logout y obtención de usuario actual
- `src/router/index.js`: rutas protegidas y públicas, redirección global
- `src/store/index.js`: gestión de estado global

## Inicio rápido
1. Instala dependencias:
   ```
   npm install
   ```
2. Inicia la app:
   ```
   npm run serve
   ```
3. Accede a [http://localhost:8080](http://localhost:8080)

## Autenticación
- El acceso a rutas privadas requiere login.
- Si no hay token, se redirige automáticamente a `/login`.
- El formulario de login siempre inicia con los campos vacíos.
- El endpoint de login es `http://localhost:3000/api/auth/login`.
- El frontend acepta la respuesta si contiene un token, aunque no tenga `success: true`.
- El token se guarda en localStorage y se usa para acceder a rutas protegidas.

## Documentación de arquitectura
Consulta la documentación detallada en `docs/arquitectura/panelArquitectura.md`, `docs/planImplementacion.md` y `docs/login.md` para entender el diseño y los siguientes pasos.
