var manuel = {
	nombre: 'manuel',
	apellio: 'gallardo',
	edad: 24,
	peso: 75
}

console.log(`Al inicio del año ${manuel.nombre} pesa ${manuel.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365
const aumentarDepeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (var i = 0; i <= DIAS_DEL_ANIO; i++) {
	
	var random = Math.random()
	if (random < 0.25)
	 {
	 	aumentarDepeso(manuel)
	 }else if (random < 0.5)
	  {
	  	adelgazar(manuel)
	 }
}

console.log(`Al final del año ${manuel.nombre} pesa ${manuel.peso.toFixed(2)}kg`)