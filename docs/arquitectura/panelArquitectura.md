# Panel de Arquitectura y Omnicanalidad

## 1. Arquitectura Actual del Chatbot Auxiliar de Ventas (backend que se está desarrollando)

Este sistema sigue un patrón **Vertical Slice** con un enfoque modular y hexagonal:

### Capas por módulo:
1. **Domain Layer** - Entidades y lógica de negocio
2. **Application Layer** - Casos de uso
3. **Infrastructure Layer** - Adaptadores y APIs externas
4. **Interface Layer** - Rutas HTTP y controladores
5. **Middleware Layer** - Validaciones específicas
6. **Testing Layer** - Pruebas unitarias e integración

### Módulos definidos y fases:
- **FASE 1: Inventory** (✅ Completado)  
  Consultas de productos y stock, validaciones, logging, PostgreSQL + pgvector, endpoints REST.
- **FASE 2: Orders** (📋 Planificado)  
  Transacciones complejas, integración con Inventory, gestión de estados y notificaciones.
- **FASE 3: Customers** (📋 Planificado)  
  Gestión de perfiles, direcciones, integración con WhatsApp.
- **FASE 4: Payments** (📋 Planificado)  
  Procesamiento seguro de pagos, integración con Stripe/PayPal, webhooks.
- **FASE 5: ChatBot + WhatsApp** (📋 Planificado)  
  Integración total, NLU con OpenAI, orquestación de módulos, RAG, métricas.

### Integraciones clave previstas:
- WhatsApp Business API
- OpenAI API
- Stripe API
- Servicios de notificaciones (Email/SMS)
- ERP/CRM opcionales

### Testing y calidad:
- Unit tests por módulo
- Integration tests para endpoints y flujos
- Cypress para e2e automatizados
- CI/CD con validaciones de calidad

---

## 2. Arquitectura Omnicanal (frontend a desarrollar)

La **arquitectura omnicanal** busca integrar todos los canales de comunicación y venta para ofrecer una experiencia fluida y consistente al cliente:

### Principios clave:
- **Integración de canales**: tienda física, web, redes sociales, apps móviles, etc.
- **Unificación de datos**: historial de clientes accesible en todos los puntos.
- **Experiencia consistente**: coherencia en atención y compra.
- **Flexibilidad**: cliente elige cómo interactuar y cambiar de canal sin fricciones.

### Beneficios:
- Mayor satisfacción y fidelización
- Eficiencia y reducción de costos
- Nuevas oportunidades de venta (BOPIS, BORIS, pasillo infinito)
- Integración de devoluciones y recogidas flexibles

### Ejemplos de uso:
- Compra online con recogida en tienda
- Devolución en tienda de compras online
- Carrito mixto (parte online, parte en tienda)
- Chat en vivo con acceso al historial

---

## 3. Cómo aprovechar la omnicanalidad en la app actual

Integrar el chatbot y módulos backend con otros canales para permitir que el cliente:
- Inicie una conversación o pedido por WhatsApp y lo complete en web o app.
- Reciba actualizaciones y soporte en cualquier canal, con el contexto preservado.
- Acceda a catálogo y disponibilidad en tiempo real, sin importar el canal.
- Pueda coordinar compras mixtas (retirar parte en tienda y recibir parte en domicilio).
- Recibir ofertas y recomendaciones personalizadas basadas en su historial unificado.

### Cambios técnicos sugeridos:
- **API Gateway** unificado para todos los canales.
- **Sistema de identidad centralizado** con tokens compartidos entre canales.
- **Sincronización de estados de pedido** en tiempo real.
- **Motor de reglas de negocio** para decidir la mejor combinación de canal/logística.
- **Módulo de orquestación omnicanal** para coordinar interacciones.

---

## 4. Siguientes pasos para un panel de administración omnicanal

Si se añade un **frontend Vue de administración**:
- Crear un panel administrador con módulos reflejando los del backend (inventory, orders, customers, payments, chatbot, rag-admin).
- Incluir **módulo omnicanal** para ver actividad y KPIs por canal.
- Añadir métricas: tasa de conversión por canal, tiempo de respuesta, % pedidos mixtos.
- Incorporar gestión de contenidos/mensajes multicanal (plantillas para WhatsApp, email, webchat).

---

## 5. Beneficio final esperado

Al incorporar la capa omnicanal sobre la arquitectura modular ya definida, la empresa podrá:
- Unificar y aprovechar datos en todos los puntos de contacto.
- Escalar a nuevos canales sin rehacer la lógica central.
- Mejorar la conversión y retención con experiencias personalizadas y consistentes.
