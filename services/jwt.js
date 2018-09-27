'use strict'

var jwt= require('jwt-simple');
var moment = require('moment');
var secret='colocar-aqui-clave';

exports.createToken = function(user){
	 var payload = {
	 	id_user:user._id,
	 	name: user.name,
	 	surname: user.surname,
	 	email:user.email,
	 	pais: user.pais,
	 	role: user.role,
	 	iat: moment().unix(),
	 	exp: moment().add(1,'days').unix
	 };

	 return jwt.encode(payload,secret);
};