# 🌿 Nuvio — Comercio local sin inventario

**Nuvio** es una plataforma de comercio electrónico donde se venden productos de pequeños fabricantes y artesanos españoles, sin necesidad de stock propio. El sistema automatiza pedidos y conecta clientes con productores locales, actuando como un intermediario digital (*broker*) que gestiona la venta, la comunicación y la logística.

---

## 🛠 Tecnologías utilizadas

- **Frontend:** React (Vite)
- **Backend:** Firebase (Auth, Firestore, Functions)
- **Estilo:** CSS personalizado / Tailwind (según avance)
- **Hosting:** Firebase Hosting o Vercel
- **Diseño:** Minimalista, logo personalizado

---

## 📦 Estructura del proyecto

### Sitio público
- `/` → Página de inicio (introducción + destacados)
- `/productos` → Catálogo de productos
- `/producto/:id` → Página de detalle
- `/checkout` → Formulario de compra
- `/gracias` → Confirmación de pedido

### Panel de administración (protegido con login Firebase)
- `/admin` → Vista general de pedidos
- `/admin/productos` → Crear/editar productos
- `/admin/pedidos` → Cambiar estado de pedidos

---

## 🔁 Flujo de pedido

1. Cliente elige un producto y lo compra.
2. El pedido se guarda en Firestore.
3. El admin (tú) recibe la notificación.
4. El proveedor es contactado manual o automáticamente.
5. El pedido se envía.
6. Se actualiza el estado en el panel.

---

## 📌 Objetivos del MVP

- Funcionalidad completa de tienda y pedidos sin necesidad de login para el cliente.
- Panel de control para gestión básica de productos y pedidos.
- Flujo de comunicación entre cliente ↔️ admin ↔️ proveedor.

---

## 🧪 En desarrollo

- Notificaciones automáticas por correo/WhatsApp
- Integración de pagos (Stripe, MercadoPago)
- Acceso para proveedores (versión futura)
- Estadísticas y reportes

---

## 🧑‍💻 Autor

Desarrollado por [Tu nombre aquí] con el apoyo técnico de ChatGPT (OpenAI).

---