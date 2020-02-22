const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}



function obtenerPersonaje(id)
{
	return new Promise((resolve,reject) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
		//request
	$
		.get( url , opts , function(data){
			resolve(data)
		})
		.fail(() => reject(id)) 
		})
	}


	
	function onError(id) {
		console.log(`Sucedio un error a obtener el personaje ${id}`)
	}

	async function obtenerPersonajes(){
		var ids = [1,2,3,4,5]
		var promesas = ids.map( id => obtenerPersonaje(id))

		try{
			var personajes = await Promise.all(promesas)

		}catch(id){
			onError(id)
		}		

	Promise
		.all(promesas)
		.then(personajes => console.log(personajes))
		.catch(onError)	
	}
	
	obtenerPersonajes()


		
//Encadenando promesas mucho mas legible que los callbacks anidados
/*
obtenerPersonaje(1)
	.then( personaje => {
	console.log(`El personaje 1 es ${personaje.name}`)
	return obtenerPersonaje(2)
})
	.then(personaje => {
	console.log(`El personaje 2 es ${personaje.name}`)
	return obtenerPersonaje(3)
})
	.then(personaje => {
		console.log(`El personaje 3 es ${personaje.name}`)
		return obtenerPersonaje(4)
})
	.then(personaje => {
		console.log(`El personaje 4 es ${personaje.name}`)
		return obtenerPersonaje(5)
})
	.then(personaje => {
		console.log(`El personaje 5 es ${personaje.name}`)
		return obtenerPersonaje(6)
})
	.catch(onError)
*/


