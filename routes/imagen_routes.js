
'use strict'

var express = require('express');
var imagenController = require('../controllers/imagenuno_controller');
var md_auth = require('../middlewares/authenticated');
var api= express.Router();
var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/imagen'});


api.post('/imagen',md_auth.ensureAuth,imagenController.saveImagen);
api.get('/imagen/:id?',md_auth.ensureAuth,imagenController.getImagen);
api.put('/imagen/:id?',md_auth.ensureAuth,imagenController.updateImagen);
api.delete('/imagen/:id?',md_auth.ensureAuth,imagenController.deleteImagen);

api.post('/upload-img-imagen/:id', [md_auth.ensureAuth, md_upload],
 imagenController.uploadImage);
api.get('/get-img-imagen/:imageFile', imagenController.getImageFile);

module.exports = api;