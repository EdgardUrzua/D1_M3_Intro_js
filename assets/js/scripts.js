const precioBase = 400000;
let cantidad = 0;
let total = 0;

document.querySelector("#precioBase").innerHTML = precioBase;
document.querySelector("#cantidad").innerHTML = cantidad;
document.querySelector("#total").innerHTML = total;

document.getElementById("btnMas").addEventListener("click", aumentar);
document.getElementById("btnMenos").addEventListener("click", disminuir);

//funcion boton + amentar cantidad
function aumentar() {
  cantidad = cantidad + 1;
  document.querySelector("#cantidad").innerHTML = cantidad;
  total = cantidad * precioBase;
  document.querySelector("#total").innerHTML = total;
}

//funcion boton - disminuir cantidad
function disminuir() {
  cantidad = Math.max(0, cantidad - 1);
  document.querySelector("#cantidad").innerHTML = cantidad;
  total = cantidad * precioBase;
  document.querySelector("#total").innerHTML = total;
}
