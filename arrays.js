var paula ={
	nombre:'Paula',
	apellido:'Barrios',
	altura:1.76,
	cantidadLibros: 52
}

var vicky ={
	nombre:'Vicky',
	apellido:'Zapata',
	altura:1.56,
	cantidadLibros: 111
}

var sascha ={
	nombre:'Sascha',
	apellido:'Fitness',
	altura:1.72,
	cantidadLibros: 10
}

var martin ={
	nombre:'Martin',
	apellido:'Diaz',
	altura:1.85,
	cantidadLibros: 81
}

var dario ={
	nombre:'Dario',
	apellido:'Gomez',
	altura:1.71,
	cantidadLibros: 63
}

const esAlta = persona => persona.altura > 1.8
//otra forma que se puede hacer
/*
const esAlta = ({altura}) => altura > 1.8
*/


var personas = [paula,vicky,dario,sascha,martin]
//filtrado de arrays
var personasAltas = personas.filter(esAlta) 

const pasarAlturaACms = persona => ({
	
	 ...persona,
		altura: persona.altura * 100
	})


var personasCms = personas.map(pasarAlturaACms)
//reduce---------------------------------------
const reducer = (acum, {cantidadLibros}) =>  acum + cantidadLibros


var totalDeLibros = personas.reduce(reducer,0)


console.log(`En total todos tienen ${totalDeLibros} libros`)