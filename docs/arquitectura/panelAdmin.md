# Arquitectura Omnicanal para Panel Admin y Chatbot

## Explicación General

La arquitectura omnicanal propuesta permite que el backend y la lógica conversacional sean agnósticos al canal de entrada, facilitando la integración de múltiples canales como WhatsApp, web (panel admin/chatbot), y app móvil. Esto asegura que la experiencia y funcionalidades sean consistentes para todos los usuarios, independientemente del canal que utilicen.

El panel admin se desarrollará en Vue.js y servirá como entorno de pruebas, demo para stakeholders, y herramienta de recopilación de feedback. Además, permitirá validar flujos y lógica conversacional antes de lanzar la integración con WhatsApp y la app móvil. Los clientes podrán interactuar con el chatbot desde el panel web, WhatsApp, o una app móvil con login, según sus preferencias.

## Arquitectura Detallada

### 1. Backend Agnóstico al Canal
- **Lógica conversacional centralizada**: El motor del chatbot reside en el backend y expone APIs REST/GraphQL para procesar mensajes, gestionar contexto y ejecutar acciones.
- **Adaptadores de canal**: Cada canal (WhatsApp, web, app móvil) tiene su propio adaptador que traduce los mensajes y eventos al formato esperado por el motor conversacional.
- **Gestión de sesiones/contexto**: El backend mantiene el contexto de conversación por usuario, independientemente del canal.

### 2. Panel Admin Web (Vue.js)
- **Interfaz de usuario**: Permite a testers, QA y stakeholders interactuar con el chatbot, visualizar métricas, y administrar conversaciones.
- **Integración con backend**: Consume las APIs del motor conversacional para enviar/recibir mensajes y mostrar el estado de las conversaciones.
- **Login y gestión de usuarios**: Permite acceso seguro para usuarios internos y clientes que prefieran el canal web.

### 3. Integración WhatsApp
- **WhatsApp Business API Adapter**: Recibe y envía mensajes entre WhatsApp y el backend, manteniendo la lógica conversacional y el contexto.
- **Webhook de recepción**: Procesa mensajes entrantes y los redirige al motor conversacional.

### 4. App Móvil
- **Frontend móvil**: Replica la experiencia conversacional del panel web, con login y gestión de usuarios.
- **Consumo de APIs**: Utiliza las mismas APIs del backend para mantener la lógica y contexto conversacional.

### 5. Orquestación y Extensibilidad
- **Módulos independientes**: Inventory, Orders, Customers, Payments y ChatBot se comunican mediante APIs y eventos.
- **Escalabilidad**: Se pueden agregar nuevos canales (email, SMS, etc.) creando adaptadores adicionales sin modificar la lógica central.

## Flujo de Interacción
1. El usuario inicia sesión en el canal de su preferencia (web, WhatsApp, app móvil).
2. El adaptador de canal envía el mensaje al backend.
3. El motor conversacional procesa el mensaje, consulta los módulos necesarios (Inventory, Orders, etc.), y genera una respuesta.
4. La respuesta se envía al usuario por el mismo canal.
5. El panel admin permite monitorear, probar y administrar todas las conversaciones y métricas en tiempo real.

## Beneficios
- Experiencia consistente y personalizada para cada usuario.
- Reutilización de lógica y APIs en todos los canales.
- Validación y pruebas ágiles desde el panel web antes de lanzar a producción en WhatsApp y app móvil.
- Extensible para futuros canales y funcionalidades.

---

> Esta arquitectura garantiza flexibilidad, escalabilidad y una experiencia omnicanal robusta, permitiendo que el panel admin en Vue.js sea el centro de pruebas y administración, y que el backend soporte múltiples canales sin duplicar lógica.


## Estructura de Carpetas y Archivos Sugerida

### Panel Admin (Vue.js)

```
panel-admin/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ChatbotPanel.vue
│   │   ├── ConversationList.vue
│   │   ├── MetricsDashboard.vue
│   │   └── UserLogin.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── ChatView.vue
│   │   └── AdminView.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── index.js
│   ├── services/
│   │   ├── api.js         # Consumo de APIs backend
│   │   └── auth.js        # Gestión de login y sesión
│   ├── App.vue
│   └── main.js
├── tests/
│   ├── unit/
│   └── e2e/
└── package.json
```

### Chatbot Backend

```
src/
├── domain/
│   ├── entities/
│   │   ├── Conversacion.js
│   │   ├── Mensaje.js
│   ├── value-objects/
│   │   ├── IntentBot.js
│   │   └── ContextoVenta.js
│   └── services/
│       └── FlujosConversacionales.js
├── application/
│   ├── use-cases/
│   │   ├── ProcesarMensajeUseCase.js
│   │   ├── GenerarRespuestaUseCase.js
│   │   ├── GestionarConversacionUseCase.js
│   │   └── OrquestadorVentasUseCase.js
├── infrastructure/
│   ├── adapters/
│   │   ├── WhatsAppAdapter.js
│   │   ├── OpenAIAdapter.js
│   │   ├── ConversationRepositoryAdapter.js
│   │   └── ModulesOrchestratorAdapter.js
│   ├── controllers/
│   │   ├── WhatsAppWebhookController.js
│   │   ├── MessageController.js
│   │   └── ConversationController.js
│   ├── database/
│   │   ├── schema.sql
│   │   └── migrations/
│   ├── queues/
│   │   ├── messageProcessor.js
│   │   └── conversationCleanup.js
│   └── routes.js
└── tests/
	├── unit/
	└── integration/
```
