'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var UsuarioSchema = Schema({
	name:String,
	surname:String,
	ciudad:String,
	direccion:String,
	celular:String,
	descripcion:String,
	email:String,
	password:String,
	facebook:String,
	twiter:String,
	role:String,
	imagen:String
});

module.exports = mongoose.model('User',UsuarioSchema);