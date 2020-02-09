

class Persona{
	constructor(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	}

	saludar(fn)
	{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)

		if (fn)
		 {
		 	fn(this.nombre,this.apellido)
		 }
	}

	soyAlto()
	{
		return this.altura > 1.8
	}
}





class Desarrollador extends Persona{

	constructor(nombre, apellido,altura){
	super(nombre, apellido,altura)
	
}
 

saludar(fn){
	/*
	var nombre = this.nombre
	var apellido = this.apellido*/
	var {nombre, apellido} = this
	console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`)
	if (fn)
		 {
		 	fn(nombre,apellido,true)
		 }
}

}

function responderSaludo(nombre,apellido,esDev)
{
	console.log(`Buen dia ${nombre} ${apellido}`)
	if (esDev) 
	{
		console.log(`A mira no sabia que eras developer`)
	}
}



var manuel = new Persona('Manuel','Gallardo',1.75)
var erika = new Persona('Erika','Fontalvo',1.65)
var arturo= new Desarrollador('Arturo','Vidal', 1.89)

manuel.saludar(responderSaludo)
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
