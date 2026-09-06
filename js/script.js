const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function toggleMenu() {
    const isOpen = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
}

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', toggleMenu);

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || menuBtn.contains(event.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

const productosDestacados = [
    {
        id: 1,
        titulo: "Sillón Copacabana",
        categoria: "Living",
        descripcion: "Estructura en madera maciza con almohadones de lino natural.",
        precio: "$210.000",
        imagen: "assets/images/Sillón Copacabana.png",
        alt: "Sillón Copacabana"
    },
    {
        id: 2,
        titulo: "Sofá Patagonia",
        categoria: "Living",
        descripcion: "Sofá modular de 3 cuerpos tapizado en géneros de alta durabilidad.",
        precio: "$385.000",
        imagen: "assets/images/Sofá Patagonia.png",
        alt: "Sofá Patagonia"
    },
    {
        id: 3,
        titulo: "Mesa Comedor Pampa",
        categoria: "Comedor",
        descripcion: "Mesa extensible fabricada en roble patagónico acabado mate.",
        precio: "$290.000",
        imagen: "assets/images/Mesa Comedor Pampa.png",
        alt: "Mesa Comedor Pampa"
    },
    {
        id: 4,
        titulo: "Biblioteca Recoleta",
        categoria: "Guardado",
        descripcion: "Estantería modular con nichos abiertos y puertas inferiores.",
        precio: "$245.000",
        imagen: "assets/images/Biblioteca Recoleta.png",
        alt: "Biblioteca Recoleta"
    }
];

function renderizarProductosDestacados() {
    const contenedor = document.getElementById('featuredProducts');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    productosDestacados.forEach(producto => {
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('product-card');

        tarjeta.innerHTML = `
            <div class="product-image-box">
                <img src="${producto.imagen}" alt="${producto.alt}" loading="lazy">
            </div>
            <div class="product-details">
                <span class="product-category">${producto.categoria}</span>
                <h3 class="product-title">${producto.titulo}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">${producto.precio}</span>
                    <a href="#CONTACTO" class="btn-card">Consultar</a>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProductosDestacados);