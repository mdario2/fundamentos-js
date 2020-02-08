

class Persona{
	constructor(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
	}

	saludar()
	{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
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
 

saludar(){
	console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`)
}

}



/*
var manuel = new Persona('Manuel','Gallardo',1.75)
var erika = new Persona('Erika','Fontalvo',1.65)
var arturo= new Persona('Arturo','Vidal', 1.89)
*/
