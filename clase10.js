var boris = {
	nombre: 'Boris',
	apellido: 'Gomez',
	edad: 33,
	ingeniero: false,
	cocinero: false,
	cantante: true,
	fotografo: false
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

printProfession(boris)