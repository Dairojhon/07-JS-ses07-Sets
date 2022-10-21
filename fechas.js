let hoy=new Date()
console.log(hoy)

let miNacimiento= new Date(1990,0,18)
console.log(miNacimiento)

let isLate = hoy>miNacimiento
if(isLate){
    console.log("Hoy es mas tarde que tu fecha de nacimiento")
}
else{
    console.log("Hoy no es mas tarde que tu fecha de nacimiento")
}

mesNacimiento=miNacimiento.getMonth()
console.log(mesNacimiento)

yearNacimiento = miNacimiento.getFullYear()
console.log(yearNacimiento)
