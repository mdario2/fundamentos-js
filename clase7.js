//Desesctructurar objetos

var dario = {
	//key : value
	nombre:'Dario',
	apellido: 'Gallardo',
	edad: '24'
}

var maria = {
	nombre: 'maria',
	apellido: 'perez',
	edad: 35
}

var margarita = {
	nombre: 'angie',
	apellido: 'rojas',
	edad: 53
}


function printInMayus(persona){
	//var nombre = persona.nombre
	var {nombre} = persona
	console.log(nombre.toUpperCase())
}

//reto
function printNameAndAge(persona)
{
	var {nombre} = persona
	var {edad} = persona
	console.log("Hola mi nombre es: "+nombre+" y tengo "+edad+" anios")
}

//Pasando un objeto como referencia
function cumpleanios(persona)
{
	return{
		...persona,
		edad: persona.edad +1
	}
}
