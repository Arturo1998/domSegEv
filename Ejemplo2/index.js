//Importamos las funciones desde firebase.js
import { dameTalleres } from "./firebase.js"

const formulario = document.getElementById("form-registro")
const lista = document.getElementById("lista-reservas")

// Cargamos el listado de talleres reservados nada más abrir la aplicación

window.addEventListener('DOMContentLoaded', async() => {
    const reservas = await dameTalleres('talleres')
    let html = ''
    reservas.forEach( doc => {
        const {horas, profesor, taller} = doc.data()
        const id = doc.id //Este lo explico que ya lo utilizaremos luego
        html += `<h2>${taller}</h2>
        <p>${profesor}</p>
        <p>${taller}</p>`                      
    })
    
    lista.innerHTML = html    
})

// Capturamos el submit del formulario

formulario.addEventListener("submit", (event) => {
    //Evitamos que el submit haga su trabajo como normalmente lo hace...comprobamos efecto
    event.preventDefault()

    //Empezamos a ver qué es lo que nos permite hacer el DOM
    const profesor = formulario['nom-profesor'].value
    const taller = formulario['nom-taller'].value
    const horas = formulario['num-horas'].value
    
   
    
})