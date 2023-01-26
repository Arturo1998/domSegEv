const encontrado = document.querySelectorAll(".contacto");

encontrado.forEach(e => console.log(e.textContent));

const modificar = document.querySelector(".modifico");

//modificamos el html
modificar.innerHTML = "Otro deporte";
encontrado[0].innerHTML = "Cambiado";

//el elemento deja de formar parte de la lista,
//las etiquetas que incluyamos son interpretadas
//por el procesador de texto
modificar.outerHTML = "<b>Otro deporte</b>";

//No interpreta las etiquetas que incluyamos en la modificación;
modificar.innerText = "<b>Otra cosa</b>";

//metodo para crear un array de un elemento recuperado -> Array.from():
// Buscar: discpatchevent 