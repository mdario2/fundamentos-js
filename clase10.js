var boris = {
	nombre: 'Boris',
	apellido: 'Gomez',
	edad: 13,
	ingeniero: false,
	cocinero: false,
	cantante: true,
	fotografo: false
}

var fabio = {
	nombre:'fabio',
	apellido:'bermudez',
	edad: 28
}


//condicionales

function printProfession(persona)
{
	console.log(`${persona.nombre} es:`)

	if(persona.ingeniero)
	{
		console.log('Ingeniero')
	}else{
		console.log('NO ES Ingeniero')
	}

	if(persona.cocinero)
	{
		console.log('Cocinero')
	}	
	if(persona.cantante)
	{
		console.log('Cantante')
	}

	if(persona.fotografo)
	{
		console.log('Fotografo')
	}

}

const MAYORIA_DE_EDAD = 18

/*const esMayordeEdad = function (persona) {
	return persona.edad >= MAYORIA_DE_EDAD
}*/

//usando arrow function lo anterior quedaria
const esMayordeEdad = persona => persona.edad >= MAYORIA_DE_EDAD



function printSiesMayorDeEdad(persona)
{
	if (esMayordeEdad(persona)) 
	{
		console.log(`${persona.nombre} es mayor de edad`)
	}else
	{
		console.log(`${persona.nombre} es menor de edad`)
	}
}


 
//printProfession(boris)

