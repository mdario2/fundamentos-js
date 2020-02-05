function Persona(nombre, apellido){
	this.nombre = nombre
	this.apellido = apellido
}


Persona.prototype.saludar = function ()
{
	console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}


var manuel = new Persona('Manuel','Gallardo')
var erika = new Persona('Erika','Fontalvo')
var arturo= new Persona('Arturo','Vidal')