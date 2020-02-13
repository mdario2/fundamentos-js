const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}

const onResponse = function(luke){
	console.log(`Hola yo soy ${luke.name} y mi altura es: ${luke.height}`)
}


function obtenerPersonaje(id)
{
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	//request
	$.get( url , opts , onResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)