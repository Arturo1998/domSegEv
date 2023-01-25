// Import the functions you need from the SDKs you need
//Aquí debemo comprobar si el 9.6.2 es la última versión...
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    //Añade aquí la configuración de tu conexión a Firebase
    
};

//Conectamos con la base de datos
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const dameTalleres=(ref)=> getDocs(collection(db,ref))