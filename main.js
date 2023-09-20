class Producto {
  constructor ( id, nombre, precio, img){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.cantidad = 1
    this.img = img
  }
}

class ControladorProducto{
  constructor (){
    this.listaProductosI  = []
  }

  agregar (producto){
    this.listaProductosI.push(producto)
  }

  cargarProductos(){
    const p1 = new Producto(1, "Conjunto Roma", 25300, "../img/sastrero.png")
    const p2 = new Producto(2, "Sastrero Mia", 11400, "../img/palazoArena.png")
    const p3 = new Producto(3, "Sweater Victoria", 7600, "../img/sweater.png")

    CP.agregar(p1)
    CP.agregar(p2)
    CP.agregar(p3)
  }

  mostrar() {
    let contenedor_indumentaria = document.getElementById("contenedor_indumentaria");

    this.listaProductosI.forEach((producto) => {
      contenedor_indumentaria.innerHTML += `
        <div class="card" style="width: 20rem; background-color: rgba(239, 228, 224, 0.8784313725);">
          <img src="${producto.img}" class="card-img-top mx-auto" alt="...">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$${producto.precio}</p>
            <button class="agregarCarrito" style="font-family: Montserrat" id="ap-${producto.id}" 
              data-id="${producto.id}" 
              data-nombre="${producto.nombre}" 
              data-precio="$${producto.precio}">Añadir al carrito</button>
          </div>
        </div>`;
    });

    this.listaProductosI.forEach((producto) => {
      const AniadirProducto = document.getElementById(`ap-${producto.id}`);

      AniadirProducto.addEventListener("click", () => {
        carrito.agregar(producto);
        carrito.mostrar();
      });
    });
  }
}

class Carrito {
    constructor(){
    this.listaCarrito = [];
  }

  agregar(producto){
    this.listaCarrito.push(producto);
    this.guardarCarritoEnLocalStorage();
  }

  guardarCarritoEnLocalStorage(){
    const carritoJSON = JSON.stringify(this.listaCarrito);
    localStorage.setItem("carrito", carritoJSON)
  }

  mostrar(){
    let contenedor_carrito = document.getElementById("contenedor_carrito");
    contenedor_carrito.innerHTML = ""

    this.listaCarrito.forEach((producto) => {
      contenedor_carrito.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Cantidad: ${producto.cantidad}</p>
                <p class="card-text">Precio: $${producto.precio}</p>
              </div>
            </div>
          </div>
        </div>`;
    });
  }
}

const CP = new ControladorProducto ();
const carrito = new Carrito();


CP.cargarProductos();
CP.mostrar ();

