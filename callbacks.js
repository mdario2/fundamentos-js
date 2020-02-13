const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true}



function obtenerPersonaje(id,callback)
{
	const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
	//request
	$.get( url , opts , function(luke){
	console.log(`Hola yo soy ${luke.name} y mi altura es: ${luke.height}`)

	if(callback)
	{
		callback()
	}
})
}

obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function () {
		obtenerPersonaje(3, function () {
			obtenerPersonaje(4 , function () {
				obtenerPersonaje(5)
			})
		})
	})
})

