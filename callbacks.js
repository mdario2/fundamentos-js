const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

//request con jQuery

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}

const onResponse = function(luke){
	console.log(`Hola yo soy ${luke.name} y mi altura es: ${luke.height}`)
}

$.get( lukeUrl , opts , onResponse)