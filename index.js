// event listener
document.querySelector(".calcTot").addEventListener(
    "click",
    () => {
      insertarArticulo();
    },
    false,
  );


  // insertar elemento
function insertarArticulo() {
    // agarrar información
    let nomArt = document.querySelector("#articulo");
    let precio = document.querySelector("#precio");
    
    // crear elemento
    let el = document.createElement("div");
    el.className = "producto";
    el.innerHTML = `
        <p class="nombreProducto">${nomArt.value} <span class="precioProducto">$${precio.value}</span></p>
    `;

    document.querySelector(".inferior").appendChild(el);


    // actualizar total
    let pfinal = document.querySelector(".precioFinal");

    pfinal.textContent = parseInt(precio.value) + parseInt(pfinal.textContent);

    // borrar info
    nomArt.value = "";
    precio.value = "";
}