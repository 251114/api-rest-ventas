
'use strict'

var express = require('express');
var comentarioController = require('../controllers/comentario_controller');
var md_auth = require('../middlewares/authenticated');

var api= express.Router();

api.post('/comentario',md_auth.ensureAuth,comentarioController.saveComentario);
api.get('/getcomentarios/:usuario?',md_auth.ensureAuth,comentarioController.getComentarios);
api.get('/comentario/:id?',md_auth.ensureAuth,comentarioController.getComentario);
api.get('/comentariosUser/:usuario',md_auth.ensureAuth,comentarioController.getComentariosxUsuario);
api.put('/comentario/:id?',md_auth.ensureAuth,comentarioController.updateComentario);
api.delete('/comentario/:id?',md_auth.ensureAuth,comentarioController.deleteComentario);
module.exports = api;