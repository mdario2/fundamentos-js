function Persona(nombre, apellido,altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}


Persona.prototype.saludar = function()
{
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
	return this.altura > 1.8	
} 


var manuel = new Persona('Manuel','Gallardo',1.75)
var erika = new Persona('Erika','Fontalvo',1.65)
var arturo= new Persona('Arturo','Vidal', 1.89)

manuel.soyAlto()
erika.soyAlto()
arturo.soyAlto()