var paula ={
	nombre:'Paula',
	apellido:'Barrios',
	altura:1.76
}

var vicky ={
	nombre:'Vicky',
	apellido:'Zapata',
	altura:1.56
}

var sascha ={
	nombre:'Sascha',
	apellido:'Fitness',
	altura:1.72
}

var martin ={
	nombre:'Martin',
	apellido:'Diaz',
	altura:1.85
}

var dario ={
	nombre:'Dario',
	apellido:'Gomez',
	altura:1.71
}

const esAlta = (persona) => persona.altura > 1.8
//otra forma que se puede hacer
/*
const esAlta = ({altura}) => altura > 1.8
*/


var personas = [paula,vicky,dario,sascha,martin]
//filtrado de arrays
var personasAltas = personas.filter(esAlta) 

console.log(personasAltas)