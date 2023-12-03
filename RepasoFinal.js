// Resumen final de conceptos 

// Tipos de datos primitivos 
let entero = 42
let decimal = 3.14
let texto = "Anita"
let activo = false
let dato = undefined
let valor = null

// Tipos de datos compuestos 
let Array = [1, 2, 3, 4, 5]
let Objeto = {
    nombre: "John",
    ciudad: "Quito",
};


// Strings - propiedades, métodos y template strings 
let tipoJuego = "Juan pica papas"
console.log(tipoJuego.length)
console.log(tipoJuego.includes("Juan"))
console.log(tipoJuego.split(" "))
console.log(`Frase: ${tipoJuego}`)

// Numbers - orden de presedencia y conversión
console.log(3 + 4 * 5)
let costo = "525.63"
console.log(Number.parseFloat(costo))
console.log(+costo + 10);

// Condicionales - operador ternario
const respuesta = 1 <= 2 ? "El primer numero es menor o igual" : "El primer numero es mayor"
console.log(respuesta)

let componente = "Header"
console.log(!componente ? "No pintar nada" : "Mostrar componente")


// Funciones 
function tomate() {
    console.log("Es una Función Declarada")
}

const uva = function () {
    console.log("Función Expresada  y Anónnima")
}

const pera = () => {
    console.log("Función Flecha")
}

// Arreglos 
let puntos = [1, 2, 3, 4, 5];
const nuevospuntos = puntos.map(p => p*2)
console.log(nuevospuntos)
console.log(puntos)
//propiedades 
console.log(puntos.length)
// Métodos mas usados
// push - unshift - pop - shift - slice - filter - includes - reduce


// Desestructuración de un arreglo
const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]
const [nickname,lastname,age,active,address,skills] = dataNewUser
console.log(nickname)
console.log(lastname)
console.log(age)
console.log(active)
console.log(address)
console.log(skills)



// spread operator
const amigos = ["Peter","Juan","Luisa","Anahi"]
const animalesAPI = ["Puka","Chochitos","Peggy"]
const nuevaInfo = [...amigos,...animalesAPI]
console.log(nuevaInfo)


// Objetos
const cliente = { //Creamos el objeto
    name:"Jhordy",
    lastName:"Aguas",
    id:"1790909090",
    address:{
        city:"Quito",
        telephone:"0912345678",
        street:"Madrid"
    },
    librosSolicitados:['Don Quijote de la Mancha','El Señor de los Anillos','Harry Potter','El Principito'],
    enviarEmailDeLibrosSolicitados (){
        return `Usted a solicitado los siguientes libros: ${this.librosSolicitados.join(', ')}`
    },
    state:true
}

console.log(cliente.id); 
console.log(cliente.enviarEmailDeLibrosSolicitados());

cliente.foto ="img/foto" 
delete cliente.state 
console.log(cliente);

//Destructuración de objetos

// const {name,lastName,id,address} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${address.city}`);

// const {name,lastName,id,myAddress=cliente.address} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${myAddress.city}`);

// const {name,lastName,id,address:{city}} = cliente
// console.log(`El ciudadano ${id} que ha solicitado los libros vive en ${city}`);

const {name,lastName,...res} = cliente
console.log(`El ciudadano ${res.id} que ha solicitado los libros vive en ${res.address.city}`);


//Uso de This en objetos

const infoCompleta = {...cliente , ...cliente}
console.log(infoCompleta)

// Métodos 
console.log(Object.keys(cliente))
    // values - entries - freeze


/*
    El spread operator se utiliza para expandir un objeto iterable en 
    múltiples elementos, mientras que el rest operator se utiliza para 
    agrupar múltiples elementos en un objeto iterable. 
*/



// Nombres abreviados de propiedades (claves)
const nombre ="laptop"
const precio = 3000
const nuevoProducto = {
    nombre,
    precio
}
console.log(nuevoProducto);



// DOM 
// Programación imperativa
const buscador = document.querySelector('#search-178')
const button = document.createElement("button")
button.innerText="Hello React"
buscador.appendChild(button)
button.addEventListener('click',()=> alert("Abrir Popup"))

// Programación declarativa
<button onClick={()=>alert("Abrir Popup")}> </button>




// Asincronismo 

// Callbacks 
setTimeout(() => {
    console.log("Operación asíncrona completada");
}, 2000)

// Promesas - Pendiente - Completa - Rechazada
fetch("https://dog.ceo/api/breeds/image/random")
    .then(respuesta => respuesta.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

// ASYNC - AWAIT
const Frases = async ()=>{
    try {
        const respuesta = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        const data = await respuesta.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
Frases()



// API

// JSON
// https://apidogs
const infoDogs = [
    {
        "name":"Peggy",
        "age":3,
    },
    {
        "name":"Bruno",
        "age":5,
    }
]

// https://apidog/1
const infoDogd =  {
    "name":"Peggy",
    "age":3,
}

// LOCAL STORAGE 
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(respuesta => respuesta.json())
    .then(data => {
            let usuario ={
                name:data.name,
                username:data.username,
                email:data.email
            }
            guardarLocalStorage(usuario)
    })


const guardarLocalStorage = (data)=>{
    localStorage.setItem('user',JSON.stringify(data))
}



// Módulos 

// Common JS

const { conectarBDD, Models } = require("./database")
console.log(conectarBDD("tosh","12345"))
console.log(Models)


// ES module
import { ListarUsarios, RegistrarUsuario } from "./controllers.js"
console.log(RegistrarUsuario())
console.log(ListarUsarios())
