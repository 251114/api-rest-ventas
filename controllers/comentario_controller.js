'use strict'

var Comentario = require('../models/comentario');


function getComentario(req, res) {

	var comentarioId = req.params.id;


	Comentario.findById(comentarioId, (err, comentario) => {
		if (err) {
			res.status(500).send({ message: 'Error en la peticion' });
		} else {
			if (!comentario) {
				res.status(404).send({ message: 'No exite comentario en la base de datos' });
			} else {
				res.status(200).send({ comentario });
			}
		}
	}
	);
}


function getComentarios(req, res) {

	var usuarioId = req.params.usuario;

	if (!usuarioId) {
		var find = Comentario.find({}).sort('_id');
	} else {
		var find = Comentario.find({ usuario: usuarioId }).sort('_id');
	}

	find.populate({ path: 'usuario' }).exec((err, comentarios) => {
		if (err) {
			res.status(500).send({ message: 'Error en la peticion' });
		} else {
			if (!comentarios) {
				res.status(404).send({ message: 'No hay comentarios en la base de datos' });
			} else {
				res.status(200).send({ comentarios });
			}
		}
	}
	);
}
function getComentariosxUsuario(req, res) {

	var usuarioId = req.params.usuario;


	if (usuarioId) {
		var find = Comentario.find({ usuario: usuarioId }).sort('_id');
		//	var find = Comentario.find({}).sort('_id');

	}

	find.populate({ path: 'restaurant' }).exec((err, comentarios) => {
		if (err) {
			res.status(500).send({ message: 'Error en la peticion' });
		} else {
			if (!comentarios) {
				res.status(404).send({ message: 'No hay comentarios en la base de datos' });
			} else {
				res.status(200).send({ comentarios });
			}
		}
	}
	);
}


function updateComentario(req, res) {
	var comentarioId = req.params.id;
	var update = req.body;

	Comentario.findByIdAndUpdate(comentarioId, update, (err, comentarioUpdated) => {
		if (err) {
			res.status(500).send({ message: 'Error en el servidor' });
		} else {
			if (!comentarioUpdated) {
				res.status(404).send({ message: 'No se ha actualizado el comentario' });
			} else {
				res.status(200).send({ comentario: comentarioUpdated });
			}
		}
	});
}

function deleteComentario(req, res) {
	var comentarioId = req.params.id;

	Comentario.findByIdAndRemove(comentarioId, (err, comentarioRemoved) => {
		if (err) {
			res.status(500).send({ message: 'Error al eliminar comentario' });
		} else {
			if (!comentarioRemoved) {
				res.status(404).send({ message: 'El comentario no ha sido eliminado' });
			} else {
				res.status(200).send({ comentario: comentarioRemoved });
			}
		}
	});
}


module.exports = {
	//saveComentario,
	getComentarios,
	updateComentario,
	deleteComentario,
	getComentariosxUsuario,
	getComentario
};