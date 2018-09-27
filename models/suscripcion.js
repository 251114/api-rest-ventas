'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // permitira crear objetos de tipo esquema

var PlatilloSchema = Schema({
	nombre:String,
	imagen:String,
	restaurant: {type: Schema.ObjectId, ref:'Restaurant'}

});

module.exports = mongoose.model('Platillo',PlatilloSchema);