'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var ImagenunoSchema = Schema({
	nombre:String,
	descripcion:String,
	imagen:String,
	user: {type: Schema.ObjectId, ref:'User'},
	producto: {type: Schema.ObjectId, ref:'producto'}

});

module.exports = mongoose.model('Imagenuno',ImagenunoSchema);