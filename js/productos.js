/**
 * Catálogo de productos de Mueblería Hermanos Jota
 * Fuente única de datos para el sitio web.
 */

const productos = [
  {
    id: "aparador-uspallata",
    nombre: "Aparador Uspallata",
    categoria: "Comedor",
    descripcion: "Aparador amplio de líneas limpias con puertas corredizas y estantes regulables. Diseñado para organizar vajilla y objetos cotidianos con calidez natural.",
    detallesFabricacion: {
      materiales: "Madera maciza de paraíso y enchapado natural de roble.",
      medidas: "160 cm de ancho × 78 cm de alto × 45 cm de profundidad.",
      terminacion: "Laca poliuretánica satinada al agua de bajo impacto ambiental.",
      garantia: "5 años de garantía estructural."
    },
    precio: 840000,
    imagen: "assets/images/Aparador Uspallata.png",
    alt: "Aparador Uspallata en madera noble con puertas corredizas",
    destacado: true
  },
  {
    id: "biblioteca-recoleta",
    nombre: "Biblioteca Recoleta",
    categoria: "Living",
    descripcion: "Estructura vertical esbelta con cinco niveles abiertos. Ideal para libros, plantas y objetos de colección en ambientes luminosos.",
    detallesFabricacion: {
      materiales: "Estructura de petiribí macizo con ensambles tradicionales de caja y espiga.",
      medidas: "90 cm de ancho × 190 cm de alto × 32 cm de profundidad.",
      terminacion: "Hidrolaca mate con tacto natural.",
      garantia: "5 años de garantía estructural."
    },
    precio: 720000,
    imagen: "assets/images/Biblioteca Recoleta.png",
    alt: "Biblioteca Recoleta de madera maciza con estantes abiertos",
    destacado: false
  },
  {
    id: "butaca-mendoza",
    nombre: "Butaca Mendoza",
    categoria: "Living",
    descripcion: "Asiento individual de proporciones generosas con apoyabrazos redondeados y tapizado artesanal en bouclé texturado de alta resistencia.",
    detallesFabricacion: {
      materiales: "Esqueleto de guatambú seleccionado y vellón siliconado de alta densidad.",
      medidas: "82 cm de ancho × 80 cm de alto × 78 cm de profundidad.",
      terminacion: "Tapizado en bouclé natural antimanchas y patas de madera a la vista.",
      garantia: "3 años en estructura y tapicería."
    },
    precio: 650000,
    imagen: "assets/images/Butaca Mendoza.png",
    alt: "Butaca Mendoza tapizada en bouclé claro con base de madera",
    destacado: false
  },
  {
    id: "escritorio-costa",
    nombre: "Escritorio Costa",
    categoria: "Oficina",
    descripcion: "Superficie de trabajo funcional con dos cajones frontales con correderas ocultas y canal pasa-cables embutido para un espacio ordenado.",
    detallesFabricacion: {
      materiales: "Tapa en MDF enchapado en laurel con patas de madera maciza torneada.",
      medidas: "130 cm de ancho × 75 cm de alto × 60 cm de profundidad.",
      terminacion: "Aceite de lino y cera de abejas para una textura sedosa.",
      garantia: "5 años de garantía estructural."
    },
    precio: 790000,
    imagen: "assets/images/Escritorio Costa.png",
    alt: "Escritorio Costa con cajones integrados y tapa de madera suave",
    destacado: false
  },
  {
    id: "mesa-comedor-pampa",
    nombre: "Mesa Comedor Pampa",
    categoria: "Comedor",
    descripcion: "Mesa principal para 6 a 8 personas con bordes suavemente biselados y patas robustas en ángulo que garantizan máxima estabilidad.",
    detallesFabricacion: {
      materiales: "Tapa maciza de roble americano de 2 pulgadas ensamblada a mano.",
      medidas: "200 cm de largo × 100 cm de ancho × 76 cm de alto.",
      terminacion: "Acabado poliuretánico mate de alta resistencia a líquidos y calor.",
      garantia: "10 años de garantía estructural."
    },
    precio: 1350000,
    imagen: "assets/images/Mesa Comedor Pampa.png",
    alt: "Mesa Comedor Pampa de roble macizo para comedor contemporáneo",
    destacado: true
  },
  {
    id: "mesa-centro-araucaria",
    nombre: "Mesa de Centro Araucaria",
    categoria: "Living",
    descripcion: "Mesa baja orgánica que combina curvas suaves y funcionalidad para el centro de la sala. Aporta ligereza visual a cualquier espacio.",
    detallesFabricacion: {
      materiales: "Madera maciza de lenga fueguina con uniones ocultas.",
      medidas: "110 cm de largo × 65 cm de ancho × 42 cm de alto.",
      terminacion: "Cera natural ecológica que realza la veta original.",
      garantia: "5 años de garantía estructural."
    },
    precio: 460000,
    imagen: "assets/images/Mesa de Centro Araucaria.png",
    alt: "Mesa de Centro Araucaria con bordes redondeados",
    destacado: false
  },
  {
    id: "mesa-noche-aconcagua",
    nombre: "Mesa de Noche Aconcagua",
    categoria: "Dormitorio",
    descripcion: "Mesita de noche compacta con nicho abierto inferior y cajón superior con cierre suave para el guardado personal.",
    detallesFabricacion: {
      materiales: "Paraíso macizo y herrajes metálicos de cierre suave importados.",
      medidas: "45 cm de ancho × 60 cm de alto × 38 cm de profundidad.",
      terminacion: "Laca poliuretánica mate satinada.",
      garantia: "3 años de garantía."
    },
    precio: 320000,
    imagen: "assets/images/Mesa de Noche Aconcagua.png",
    alt: "Mesa de Noche Aconcagua con cajón y estante inferior",
    destacado: false
  },
  {
    id: "silla-trabajo-belgrano",
    nombre: "Silla de Trabajo Belgrano",
    categoria: "Oficina",
    descripcion: "Silla ergonómica de diseño con asiento acolchado, respaldo envolvente en contrachapado curvo y base giratoria con ruedas de goma.",
    detallesFabricacion: {
      materiales: "Estructura curvada en nogal, pistón neumático reforzado y tapizado textil gris.",
      medidas: "60 cm de ancho × 88-98 cm de altura regulable × 60 cm de profundidad.",
      terminacion: "Madera laqueada mate y tejido antimanchas ignífugo.",
      garantia: "3 años en mecanismos y pistón."
    },
    precio: 540000,
    imagen: "assets/images/Silla de Trabajo Belgrano.png",
    alt: "Silla de Trabajo Belgrano giratoria con respaldo ergonómico de madera",
    destacado: false
  },
  {
    id: "sillas-cordoba",
    nombre: "Sillas Córdoba (Pack × 2)",
    categoria: "Comedor",
    descripcion: "Juego de dos sillas de comedor de estilo atemporal, con respaldo ergonómico curvado y asiento tapizado en lino natural color arena.",
    detallesFabricacion: {
      materiales: "Guatambú macizo estacionado, uniones con espigas pasantes reforzadas.",
      medidas: "48 cm de ancho × 84 cm de alto × 52 cm de profundidad (asiento a 46 cm).",
      terminacion: "Lustre natural con protección antihumedad.",
      garantia: "5 años de garantía estructural."
    },
    precio: 490000,
    imagen: "assets/images/Sillas Córdoba.png",
    alt: "Juego de dos Sillas Córdoba en madera clara con asiento tapizado",
    destacado: false
  },
  {
    id: "sillon-copacabana",
    nombre: "Sillón Copacabana",
    categoria: "Living",
    descripcion: "Sillón individual de descanso profundo con apoyacabezas integrado y apoyapiés a juego. Un clásico renovado para horas de lectura.",
    detallesFabricacion: {
      materiales: "Madera maciza de incienso con cinchas elásticas italianas y cuero vacuno legítimo.",
      medidas: "88 cm de ancho × 95 cm de alto × 85 cm de profundidad.",
      terminacion: "Cuero anilina encerado que adquiere pátina con los años.",
      garantia: "5 años en estructura y cuero."
    },
    precio: 980000,
    imagen: "assets/images/Sillón Copacabana.png",
    alt: "Sillón Copacabana de lectura tapizado en cuero vacuno",
    destacado: true
  },
  {
    id: "sofa-patagonia",
    nombre: "Sofá Patagonia (3 Cuerpos)",
    categoria: "Living",
    descripcion: "Sofá modular de tres plazas con almohadones mullidos rellenos de plumón sintético y base de madera maciza vista que eleva la pieza del piso.",
    detallesFabricacion: {
      materiales: "Bastidor de eucalipto Grandis seleccionado, resortes zigzag y funda lavable en tusor.",
      medidas: "220 cm de largo × 85 cm de alto × 95 cm de profundidad.",
      terminacion: "Tapizado en tusor 100% algodón prelavado con proceso antimanchas.",
      garantia: "10 años en el esqueleto estructural."
    },
    precio: 1650000,
    imagen: "assets/images/Sofá Patagonia.png",
    alt: "Sofá Patagonia de tres cuerpos con base de madera maciza",
    destacado: true
  }
];

/**
 * Simula una petición asíncrona a un backend para obtener los productos.
 * Utiliza setTimeout y devuelve una Promise para cumplir con la consigna técnica.
 * @param {number} delayMs Tiempo de demora simulado en milisegundos (default 500ms)
 * @returns {Promise<Array>} Promesa que resuelve al array de productos
 */
function obtenerProductos(delayMs = 500) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve([...productos]);
    }, delayMs);
  });
}

/**
 * Formatea un número como moneda argentina (ARS).
 * @param {number} valor 
 * @returns {string} Ejemplo: "$840.000"
 */
function formatearPrecio(valor) {
  return `$${valor.toLocaleString("es-AR")}`;
}

/**
 * Normaliza una ruta relativa de imagen según si la página está en raíz o dentro de /pages/
 * @param {string} rutaOriginal 
 * @param {boolean} desdeSubcarpeta 
 * @returns {string}
 */
function normalizarRutaImagen(rutaOriginal, desdeSubcarpeta = false) {
  if (desdeSubcarpeta) {
    return rutaOriginal.startsWith("assets/") ? `../${rutaOriginal}` : rutaOriginal;
  }
  return rutaOriginal;
}

/* ========================================================
   GESTIÓN DEL CARRITO SIMULADO (localStorage)
   ======================================================== */

const CARRITO_STORAGE_KEY = "hj_carrito_items";

/**
 * Obtiene los items del carrito desde localStorage.
 * @returns {Array<{ id: string, cantidad: number }>}
 */
function obtenerCarrito() {
  try {
    const raw = localStorage.getItem(CARRITO_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error al leer el carrito de localStorage:", e);
    return [];
  }
}

/**
 * Guarda el estado del carrito en localStorage y actualiza contadores.
 * @param {Array<{ id: string, cantidad: number }>} items 
 */
function guardarCarrito(items) {
  try {
    localStorage.setItem(CARRITO_STORAGE_KEY, JSON.stringify(items));
    const totalCantidad = items.reduce((acc, curr) => acc + (curr.cantidad || 0), 0);
    // Sincroniza con claves legadas también
    localStorage.setItem("carritoCantidad", String(totalCantidad));
    localStorage.setItem("hj_cart_count", String(totalCantidad));
    actualizarContadoresCarrito();
  } catch (e) {
    console.error("Error al guardar el carrito:", e);
  }
}

/**
 * Suma una unidad de un producto al carrito simulado.
 * @param {string} productoId 
 * @param {number} cantidad 
 * @returns {number} Nueva cantidad total de ítems en el carrito
 */
function agregarAlCarrito(productoId, cantidad = 1) {
  const items = obtenerCarrito();
  const existente = items.find((it) => it.id === productoId);

  if (existente) {
    existente.cantidad += cantidad;
  } else {
    items.push({ id: productoId, cantidad });
  }

  guardarCarrito(items);
  return items.reduce((acc, curr) => acc + curr.cantidad, 0);
}

/**
 * Devuelve la cantidad total de artículos en el carrito.
 * @returns {number}
 */
function obtenerCantidadTotalCarrito() {
  const items = obtenerCarrito();
  if (items.length > 0) {
    return items.reduce((acc, curr) => acc + (curr.cantidad || 0), 0);
  }
  // Fallback a clave simple si existe
  const legada = localStorage.getItem("carritoCantidad") || localStorage.getItem("hj_cart_count");
  return legada ? Number.parseInt(legada, 10) || 0 : 0;
}

/**
 * Muestra una notificación emergente visual cuando se añade un producto.
 * @param {string} mensaje 
 */
function mostrarNotificacionCarrito(mensaje = "Producto agregado al carrito") {
  let toast = document.getElementById("toast-carrito");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-carrito";
    toast.className = "notificacion-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.classList.add("visible");
  window.clearTimeout(toast._timeoutId);
  toast._timeoutId = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

/**
 * Actualiza todos los elementos del DOM que muestran el contador de carrito.
 */
function actualizarContadoresCarrito() {
  const total = obtenerCantidadTotalCarrito();
  const badges = document.querySelectorAll("[data-cart-count]");
  badges.forEach((badge) => {
    badge.textContent = total;
    const indicador = badge.closest(".indicador-carrito");
    if (indicador) {
      indicador.setAttribute("aria-label", `Carrito con ${total} productos`);
    }
  });
}

// Ejecutar sincronización al cargar el script en cualquier página
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", actualizarContadoresCarrito);
  } else {
    actualizarContadoresCarrito();
  }
}
