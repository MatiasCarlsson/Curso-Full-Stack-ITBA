# Mueblería Hermanos Jota - E-commerce

Trabajo práctico integrador para el curso Full Stack Developer (Sprint 1 y 2) de ITBA Educación Ejecutiva.

Sitio web desarrollado con HTML, CSS y JavaScript para una mueblería artesanal. El proyecto simula una tienda en línea con catálogo dinámico, vista de detalle, carrito de compras y formulario de contacto con validación.

---

## Integrantes y tareas del grupo

| Rol | Nombre y apellido | Correo electrónico | Usuario GitHub | Tareas realizadas |
| :--- | :--- | :--- | :--- | :--- |
| **Referente** | Matías Viana Carlsson | matiascarlsson1@gmail.com | [@matiascarlsson](https://github.com/matiascarlsson) | Coordinación del equipo, vista de detalle de producto (`pages/producto.html`), persistencia del carrito con `localStorage` e integración final de código. |
| **Integrante** | Lautaro Joaquín Quevedo | quevedojoaquin@outlook.com | [@LautaroJQ](https://github.com/LautaroJQ) | Maquetado y validación del formulario de Contacto (`pages/contacto.html`, `js/contacto.js`), sección de destacados y estilos visuales. |
| **Integrante** | Tiago Moyano | tiagomoyano15@gmail.com | [@TiagoMoyano](https://github.com/TiagoMoyano) | Maquetado inicial de la portada (`index.html`), componentes de cabecera y lógica del menú de navegación responsive. |
| **Integrante** | Dante Lamorte | dantelamorte@outlook.com | [@DanteLamorte](https://github.com/DanteLamorte) | Catálogo de productos (`pages/productos.html`), array de datos (`js/productos.js`), carga asíncrona simulada y buscador de piezas. |

---

## Páginas y funcionalidades

- **Inicio (`index.html`)**:
  - Encabezado con logo, menú de navegación y contador del carrito.
  - Portada principal con accesos a la colección y al taller.
  - Sección de productos destacados cargados desde JavaScript.
  - Pie de página con información del taller, horarios y redes.

- **Catálogo (`pages/productos.html`)**:
  - Grilla con todas las piezas disponibles.
  - Carga de productos desde el archivo `js/productos.js`.
  - Buscador para filtrar productos por nombre, categoría o materiales.
  - Botón para agregar directamente al carrito y enlaces a la página de cada producto.

- **Detalle de producto (`pages/producto.html`)**:
  - Carga el producto seleccionado según el parámetro en la URL.
  - Imagen, descripción detallada, medidas, materiales y precio.
  - Botón para sumar la pieza al carrito de compras.

- **Contacto (`pages/contacto.html`)**:
  - Formulario con validación en tiempo real (nombre, email y mensaje).
  - Mensajes de confirmación y advertencias en pantalla.
  - Datos de ubicación, horarios y canales de consulta directa.

- **Carrito de compras**:
  - Contador en el header sincronizado entre páginas mediante `localStorage`.
  - Aviso visual cada vez que se suma un producto.

---

## Tecnologías utilizadas

- **HTML5**: Estructura semántica de cada sección del sitio.
- **CSS3**: Flexbox, CSS Grid, diseño responsivo para móviles y variables para colores y fuentes.
- **JavaScript**: Renderizado dinámico, eventos, promesas para simular carga y almacenamiento local (`localStorage`).

---

## Estructura de carpetas

```text
Curso-Full-Stack-ITBA/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── productos.js
│   ├── contacto.js
│   └── script.js
├── pages/
│   ├── productos.html
│   ├── producto.html
│   └── contacto.html
├── assets/
│   ├── icons/
│   │   └── logo.svg
│   └── images/
└── README.md
```

---

## Despliegue

El sitio puede publicarse directamente con GitHub Pages:
1. Ir a **Settings** > **Pages** en el repositorio.
2. En **Build and deployment**, seleccionar la rama `main` (o `matias`) y carpeta `/ (root)`.
3. El sitio quedará disponible en:
   `https://matiascarlsson.github.io/Curso-Full-Stack-ITBA/`
