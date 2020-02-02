var signo = prompt('cual es tu signo?')

switch(signo)
{
	case 'aries':
		console.log('Aunque todo cambio le genere inseguridad, ya es el momento para que avance en su vida')
		break

	case 'tauro':
		console.log('Tener la Luna en su signo, le hará recuperar su propia energía.')
		break

	case 'geminis':
	case 'géminis':
		console.log('Sería bueno que no se empecine y escuche a su entorno.')
		break

	case 'acuario':
		console.log('Será de suma importancia que empiece a moderar cada uno de sus impulsos y piense dos veces antes de tomar una determinación fundamental en su vida.')
		break
	
	case 'piscis':
	case 'píscis':
		console.log('Sepa que será muy positivo para sus relaciones que modifique esa exigencia que tiende a corregir los detalles sin importancia de los demás.')
		break

	default:
		alert('No es un signo zodiacal válido')
	location.reload()


}