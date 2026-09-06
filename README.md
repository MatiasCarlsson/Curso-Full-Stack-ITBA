# E-commerce Mueblería Hermanos Jota
> Proyecto integrador · Full Stack Developer (Sprint 1 y 2) · ITBA Educación Ejecutiva

Sitio web e-commerce interactivo del lado del cliente para una mueblería de diseño artesanal y sustentable radicada en Buenos Aires. Desarrollado sin backend, simulando la carga asíncrona de datos del catálogo y persistiendo el carrito de compras localmente.

---

## 👥 Integrantes del Equipo

| Rol | Nombre y apellido | Correo electrónico | Usuario GitHub |
| :--- | :--- | :--- | :--- |
| **Referente** | Matías Viana Carlsson | matiascarlsson1@gmail.com | [@matiascarlsson](https://github.com/matiascarlsson) |
| **Integrante** | Lautaro Joaquín Quevedo | quevedojoaquin@outlook.com | [@LautaroJQ](https://github.com/LautaroJQ) |
| **Integrante** | Tiago Moyano | tiagomoyano15@gmail.com | [@TiagoMoyano](https://github.com/TiagoMoyano) |
| **Integrante** | Dante Lamorte | dantelamorte@outlook.com | [@DanteLamorte](https://github.com/DanteLamorte) |

---

## 🚀 Funcionalidades Principales

1. **Página de Inicio (`index.html`)**:
   - Encabezado institucional con logotipo SVG, navegación accesible y contador del carrito sincronizado.
   - Hero Banner principal con propuesta de valor y accesos rápidos a la colección y taller.
   - Sección de **Productos Destacados** cargados de forma asíncrona y renderizados dinámicamente mediante manipulación del DOM.
   - Botón directo para añadir al carrito con notificación flotante (toast).
   - Pie de página completo con datos de ubicación de la Casa Taller, horarios y vías de contacto.

2. **Catálogo de Productos (`pages/productos.html`)**:
   - Grilla completa y responsiva de productos con información detallada de cada pieza (categoría, nombre, descripción breve y precio formateado en ARS).
   - Fuente de datos centralizada en JavaScript local (`js/productos.js`).
   - Carga asíncrona simulada mediante `Promise` y `setTimeout`.
   - **Buscador interactivo en tiempo real (bonus funcional)** que filtra instantáneamente por nombre, categoría, descripción y materiales.
   - Contador de piezas disponibles y mensajes de estado (cargando / sin resultados).
   - Enlace en cada tarjeta a su correspondiente página de detalle individual.

3. **Detalle de Producto (`pages/producto.html`)**:
   - Carga dinámica basada en el parámetro `?id=...` de la URL.
   - Imagen en alta resolución con marco contenedor adaptativo.
   - Ficha técnica de **Detalles de Fabricación**: materiales de origen, medidas exactas, terminación/acabados y garantía de taller.
   - Botón funcional **"Añadir al Carrito"** con persistencia en `localStorage`.
   - Barra de migas de pan (*breadcrumbs*) para navegación fluida.

4. **Contacto y Consultas (`pages/contacto.html`)**:
   - Formulario semántico con campos de Nombre, Email y Mensaje.
   - **Validación del lado del cliente con JavaScript** (`contacto.js`), control de errores en tiempo real y accesibilidad ARIA.
   - Mensajes de confirmación de éxito y manejo de errores mediante el DOM.
   - Panel lateral con información de atención, showroom, email y WhatsApp.

5. **Carrito Simulado Global**:
   - Indicador de carrito visible en el encabezado de todas las páginas.
   - Contador numérico sincronizado entre pestañas y navegaciones a través de `localStorage`.
   - Notificaciones toast visuales que confirman la adición de productos.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica estricta (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dl>`), accesibilidad y validaciones nativas.
- **CSS3**:
  - Diseño **100% responsivo Mobile-First** con media queries progresivas (`min-width: 520px`, `700px`, `860px`, `960px`).
  - **Flexbox** y **CSS Grid** para la distribución de layouts, grillas de productos y paneles de contenido.
  - Sistema de tokens y variables CSS (`--color-siena`, `--color-salvia`, `--fuente-titulo`, etc.) para una identidad visual consistente.
- **JavaScript (ES6+)**:
  - Colecciones de datos modeladas en Arrays de Objetos estructurados.
  - Peticiones asíncronas simuladas con `Promise`, `setTimeout` y sintaxis `async/await`.
  - Manipulación limpia del DOM con `DocumentFragment` y plantillas de cadenas literales.
  - Gestión de eventos mediante `addEventListener` y delegación de eventos.
  - Persistencia de estado en el navegador vía `localStorage`.

---

## 📂 Estructura del Repositorio

```text
Curso-Full-Stack-ITBA/
├── index.html                   # Portada principal y productos destacados
├── css/
│   └── styles.css               # Hoja de estilos unificada y responsive (Mobile First)
├── assets/
│   ├── icons/
│   │   └── logo.svg             # Isotipo oficial de la marca
│   └── images/                  # Fotografías de los 11 productos del catálogo
├── js/
│   ├── productos.js             # Base de datos local, carga asíncrona y lógica de carrito
│   ├── contacto.js              # Validación y lógica del formulario de contacto
│   └── script.js                # Interacciones generales
├── pages/
│   ├── productos.html           # Catálogo general con buscador interactivo
│   ├── producto.html            # Ficha de detalle de producto dinámico
│   └── contacto.html            # Formulario de contacto y datos de taller
└── README.md                    # Documentación del proyecto
```

---

## 🌐 Publicación / Despliegue

El proyecto está preparado para desplegarse de manera directa en **GitHub Pages**:
1. En el repositorio de GitHub, dirigirse a **Settings** > **Pages**.
2. En la sección **Build and deployment**, seleccionar la fuente `Deploy from a branch`.
3. Seleccionar la rama `main` y la carpeta `/ (root)`.
4. El sitio quedará accesible de forma pública en:
   `https://matiascarlsson.github.io/Curso-Full-Stack-ITBA/`
