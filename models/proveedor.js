'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ProveedorSchema = Schema({
	nombre:String,
	tipo:String,
	celular:String,
	email:String,
	direccion:String,
	descripcion:String,
	imagen:String
});

module.exports = mongoose.model('Proveedor',ProveedorSchema);