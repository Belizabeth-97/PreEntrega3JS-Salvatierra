const contenedor_indumentaria = document.getElementById("contenedor_indumentaria")

const listaProductosI = [{id: 1, nombre: "Conjunto Roma", precio: 25300, img: "./img/sastrero.png"},
                        {id: 2, nombre: "Sastrero Mia", precio: 11400, img: "img/palazoArena.png"},
                        {id: 3, nombre:  "Sweater Victoria", precio: 5600,img: "img/sweater.png"}];


function render (listaProductosI, contenedor_indumentaria){

    contenedor_indumentaria.innerHTML = " "

    listaProductosI.forEach(producto => {
        contenedor_indumentaria.innerHTML += `<div class="card" style="width: 18rem;">
<img src="${producto.img}" class="card-img-top" alt="...">
<div class="card-body">
     <h5 class="card-title">${producto.nombre}</h5>
     <p class="card-text">${producto.precio}</p>
     <a href="#" class="btn btn-primary">Añadir al carrito</a>
</div>
 </div>`;
});
}

