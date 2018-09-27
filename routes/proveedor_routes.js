'use strict'

var express = require('express');
var proveedorController = require('../controllers/proveedor_controller');
var md_auth = require('../middlewares/authenticated');

var api= express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/proveedor'});



api.post('/proveedor',md_auth.ensureAuth,proveedorController.saveProveedor);
api.get('/proveedor/:id?',md_auth.ensureAuth,proveedorController.getProveedor);
api.get('/proveedores',proveedorController.getProveedores);
api.put('/proveedor/:id?',md_auth.ensureAuth,proveedorController.updateProveedor);
api.delete('/proveedor/:id?',md_auth.ensureAuth,proveedorController.deleteProveedor);
api.post('/upload-img-proveedor/:id', [md_auth.ensureAuth, md_upload],
 proveedorController.uploadImage);
api.get('/get-img-proveedor/:imageFile', proveedorController.getImageFile);
module.exports = api;