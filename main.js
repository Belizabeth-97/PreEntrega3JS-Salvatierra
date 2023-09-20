const contenedor_indumentaria = document.getElementById("contenedor_indumentaria");
const contenedor_accesorios = document.getElementById("contenedor_accesorios");

const listaProductosI = [
  { id: 1, nombre: "Conjunto Roma", precio: 25300, img: "../img/sastrero.png" },
  { id: 2, nombre: "Sastrero Mia", precio: 11400, img: "../img/palazoArena.png" },
  { id: 3, nombre: "Sweater Victoria", precio: 5600, img: "../img/sweater.png" },
];

const listaProductosA = [
    { id: 1, nombre: "Anillo Cobra", precio: 5300, img: "../img/anillocobra.png" },
    { id: 2, nombre: "Aros Renata", precio: 4400, img: "../img/arosrenata.png" },
    { id: 3, nombre: "Collar Estrellas", precio: 3600, img: "../img/collarestrellas.png" },
  ];

function renderIndumentaria(listaProductosI, contenedor_indumentaria) {
  listaProductosI.forEach(producto => {
    contenedor_indumentaria.innerHTML += `
      <div class="card" style="width: 20rem; background-color: rgba(239, 228, 224, 0.8784313725);">
        <img src="${producto.img}" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <button class="agregarCarrito" 
                  data-id="${producto.id}" 
                  data-nombre="${producto.nombre}" 
                  data-precio="$${producto.precio}">Añadir al carrito</button>
        </div>
      </div>`;
  });
}

// Llama a la función render para mostrar inicialmente los productos
renderIndumentaria(listaProductosI, contenedor_indumentaria);

function renderAccesorios(listaProductosA, contenedor_accesorios) {
  listaProductosA.forEach(producto => {
    contenedor_accesorios.innerHTML += `
      <div class="card" style="width: 20rem; background-color: rgba(239, 228, 224, 0.8784313725);">
        <img src="${producto.img}" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <button class="agregarCarrito" 
                  data-id="${producto.id}" 
                  data-nombre="${producto.nombre}" 
                  data-precio="$${producto.precio}">Añadir al carrito</button>
        </div>
      </div>`;
  });
}

renderAccesorios(listaProductosA, contenedor_accesorios);


// Agrego evento click a los botones "Añadir al carrito"
const agregarCarrito = document.querySelectorAll("#agregarCarrito");

// Agrego evento click a los botones "Añadir al carrito" en productos
const agregarCarritoProductos = document.querySelectorAll("#contenedor_indumentaria #agregarCarrito");
agregarCarritoProductos.forEach(boton => {
  boton.addEventListener("click", agregarAlCarrito);
});

// Agrego evento click a los botones "Añadir al carrito" en accesorios
const agregarCarritoAccesorios = document.querySelectorAll("#contenedor_accesorios #agregarCarrito");
agregarCarritoAccesorios.forEach(boton => {
  boton.addEventListener("click", agregarAlCarrito);
});

const bolsa = document.getElementById("bolsa")
const listaCarrito= document.getElementById("lista-carrito");

const carrito = " "

function agregarAlCarrito(event) {
  // Información del producto desde el botón
  const producto = {
    id: event.target.dataset.id,
    nombre: event.target.dataset.nombre,
    precio: parseFloat(event.target.dataset.precio)
  };

  agregarProductoAlCarrito(producto);
  actualizarCarrito();
}

function agregarProductoAlCarrito(producto) {
  carrito.push(producto);
}

function actualizarCarrito() {
  const listaCarrito= document.getElementById("lista-carrito");
  listaCarrito.innerHTML = ""; // Borra el contenido actual del carrito

  let total = 0;

  carrito.forEach(producto => {
    const itemCarrito = document.createElement("li");
    itemCarrito.innerHTML = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
    listaCarrito.appendChild(itemCarrito);

    total += producto.precio;
  });

  // Muestra el total en el carrito
  const totalCarrito = document.createElement("li");
  totalCarrito.innerHTML = `Total: $${total.toFixed(2)}`;
  listaCarrito.appendChild(totalCarrito);
}

