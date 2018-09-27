'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ImagentresSchema = Schema({
	nombre:String,
	descripcion:String,
	imagen:String,
	user: {type: Schema.ObjectId, ref:'User'},
	producto: {type: Schema.ObjectId, ref:'Producto'}

});

module.exports = mongoose.model('Imagentres',ImagentresSchema);