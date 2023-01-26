import { dameDocs, onDameDocs } from "./fireBase.js";

const lista = document.getElementById("contenedorListas");
const formulario = document.getElementById("formulario");

/* Cargamos eñ ñistado de mascotas al añadir la información (método mágico) */

window.addEventListener("DOMContentLoaded", async () => {
await onDameDocs('Mascotas', (docs) => {
    let html = "";
    docs.forEach( doc => {
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
});

/* Cargamos eñ ñistado de mascotas al añadir la información (método estático) */

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

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario["nombreMascota"].value;
    const raza = formulario["razaMascota"].value;
    lista.innerHTML += 
`<div>
<h2> Nombre </h2>
<p> ${nombre} </p>
<h2> Raza </h2>
<p> ${raza} </p>
</div>`;
    formulario.reset()
});
})
