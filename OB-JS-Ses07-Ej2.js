const datos_personales = {
    nombre:"Jhon Dairo",
    apellido: "Rodriguez Lopera",
    edad: 32,
    estatura: 180,
    isDev: true
}

let miEdad=datos_personales.edad
console.log(miEdad)

datos_personales2 = {...datos_personales}
datos_personales2.nombre = "Oscar"
datos_personales2.apellido = "Velasquez"
datos_personales2.edad=32
datos_personales2.estatura= 175
datos_personales2.isDev = false

const datos_personales3 = {...datos_personales}

datos_personales3.nombre = "Cristian"
datos_personales3.apellido = "Cortes"
datos_personales3.edad = 35
datos_personales3.estatura = 178
datos_personales3.isDev = false

const mis_Amigos = [datos_personales, datos_personales2, datos_personales3]

const amigos_ordenados = [...mis_Amigos.sort((a,b) => b.edad  - a.edad)]

console.log(amigos_ordenados)