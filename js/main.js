const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
});

const searchInput = document.getElementById('search-input');
const productGrid = document.getElementById('product-grid');
const catalogCount = document.getElementById('catalog-count');
const catalogStatus = document.getElementById('catalog-status');
const cartCount = document.getElementById('cart-count');

let catalogo = [];
let itemsInCart = 0;

const formatearPrecio = (precio) => `$${precio.toLocaleString('es-AR')}`;

const crearTarjeta = (producto) => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
        <a class="product-link" href="producto.html?id=${producto.id}">
            <div class="product-media">
                <img src="${producto.imagen}" alt="${producto.alt}" loading="lazy" width="1024" height="1024">
            </div>
            <div class="product-body">
                <p class="product-category">${producto.categoria}</p>
                <h2 class="product-name">${producto.nombre}</h2>
                <p class="product-detail">${producto.descripcion}</p>
                <p class="product-price">${formatearPrecio(producto.precio)}</p>
            </div>
        </a>
        <button class="btn btn-add" type="button" data-id="${producto.id}">Añadir al carrito</button>
    `;
    return card;
};

const renderProductos = (lista) => {
    const fragmento = document.createDocumentFragment();
    lista.forEach((producto) => fragmento.appendChild(crearTarjeta(producto)));

    productGrid.innerHTML = '';
    productGrid.appendChild(fragmento);

    if (lista.length === 0) {
        catalogCount.textContent = '';
    } else {
        catalogCount.textContent = lista.length === 1
            ? '1 pieza disponible'
            : `${lista.length} piezas disponibles`;
    }

    catalogStatus.textContent = lista.length === 0
        ? 'No encontramos piezas con ese nombre. Probá con otra búsqueda.'
        : '';
    catalogStatus.hidden = lista.length !== 0;
};

const buscarProductos = (query) => {
    const termino = query.trim().toLowerCase();

    return catalogo.filter((producto) => {
        const texto = `${producto.nombre} ${producto.categoria} ${producto.descripcion}`.toLowerCase();
        return texto.includes(termino);
    });
};

searchInput.addEventListener('input', () => {
    renderProductos(buscarProductos(searchInput.value));
});

productGrid.addEventListener('click', (event) => {
    const button = event.target.closest('.btn-add');
    if (!button) return;

    itemsInCart++;
    cartCount.textContent = itemsInCart;
});

const iniciarCatalogo = async () => {
    try {
        catalogo = await obtenerProductos();
        renderProductos(catalogo);
        searchInput.disabled = false;
    } catch (error) {
        catalogStatus.textContent = 'No pudimos cargar el catálogo. Probá de nuevo en unos minutos.';
        catalogCount.textContent = '';
    }
};

iniciarCatalogo();
