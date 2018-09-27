'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ComentarioSchema = Schema({
	titulo:String,
	descripcion:String,
	imagen:String,
	usuario: {type: Schema.ObjectId, ref:'User'},
	producto: {type: Schema.ObjectId, ref:'Producto'}

});

module.exports = mongoose.model('Comentario', ComentarioSchema);