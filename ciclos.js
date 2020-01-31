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
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
var dias = 0
const META = manuel.peso - 3

while(manuel.peso > META)
{
	if (comeMucho()) {
		//aumenta de peso
		aumentarDepeso(manuel)
	}
	if (haceDeporte()){ //adelgaza
		adelgazar(manuel)
	}
	dias++
}


console.log(`Pasaron ${dias} dias hasta que ${manuel.nombre} adelgazo 3kg`)