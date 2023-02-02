import {
  dameDocs,
  onDameDocs,
  anadeReserva,
  borraDoc,
  editarDoc,
  cogerDoc,
} from "./fireBase.js";

const lista = document.getElementById("contenedorListas");
const formulario = document.getElementById("formulario");
const botonCanelar = document.getElementById("botonCancelar");

//creamos variables editar y variable global que guarda la id

let editando = false;
let varGlobal = "";

botonCanelar.addEventListener("click", () => {
  botonCanelar.style.visibility = "hidden"
  formulario["botonEnvio"].innerHTML = "Enviar"
  editando = false
  formulario.reset()
});

/* Cargamos el listado de mascotas al añadir la información (método estático) */

/*window.addEventListener("DOMContentLoaded", async () => {
    const total = await dameDocs('Mascotas')
    let html = "";
    total.forEach( doc => {
        const { nombreMascota, razaMascota } = doc.data();
        const id = doc.id;
        html += `<div>
        <h2> Nombre </h2>
        <p> ${ nombreMascota } </p>
        <h2> Raza </h2>
        <p> ${ razaMascota } </p>
        </div>`;
    })
        lista.innerHTML = html;
    });*/

/* Cargamos el listado de mascotas al  abrir la app (método mágico) */

window.addEventListener("DOMContentLoaded", async () => {
  await onDameDocs("Mascotas", (docs) => {
    let html = "";
    docs.forEach((doc) => {
      const { nombreMascota, razaMascota } = doc.data();
      const id = doc.id;
      html += `<div>
        <h2> Nombre </h2>
        <p> ${nombreMascota} </p>
        <h2> Raza </h2>
        <p> ${razaMascota} </p>
        <button class="botonEliminar" data-id="${id}">Borrar</button>
        <button class="botonModificar" data-id="${id}">Modificar</button>
        </div>`;
    });
    lista.innerHTML = html;

    //implementar borrar

    const botonesEliminar = lista.querySelectorAll(".botonEliminar");

    botonesEliminar.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        await borraDoc("Mascotas", e.target.dataset.id);
      })
    );

    //implementamos modificar

    const botonesModificar = lista.querySelectorAll(".botonModificar");

    botonesModificar.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        const doc = await cogerDoc("Mascotas", e.target.dataset.id);
        const { nombreMascota, razaMascota } = doc.data();
        formulario["nombreMascota"].value = nombreMascota;
        formulario["razaMascota"].value = razaMascota;

        //cambiamos el valor de editar y asignamos la id
        editando = true;
        varGlobal = e.target.dataset.id;
        botonCanelar.style.visibility = "visible";
        formulario["botonEnvio"].innerHTML = "Actualizar";
      })
    );
  });

  //capturamos submit del formulario

  formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const nombre = formulario["nombreMascota"].value;
    const raza = formulario["razaMascota"].value;

    //actualizamos o modificamos dependiendo del valor de editando
    editando
      ? editarDoc("Mascotas", varGlobal, {
          nombreMascota: nombre,
          razaMascota: raza,
        })
      :  anadeReserva("Mascotas", {
          nombreMascota: nombre,
          razaMascota: raza,
        });
    formulario.reset();
    editando = false;
    botonCanelar.style.visibility = "hidden";
    formulario["botonEnvio"].innerHTML = "Salvar";
  });
});
