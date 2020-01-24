//OBJETOS
var dario = {
	//key : value
	nombre:'Dario',
	apellido: 'Gallardo',
	edad: '24'
}

var maria = {
	nombre: 'maria',
	apellido: 'perez',
	edad: 20
}

function printInMayus({nombre}){
	
	console.log(nombre.toUpperCase())
}

printInMayus(dario)
printInMayus(maria)
printInMayus({nombre: 'Pepito'})