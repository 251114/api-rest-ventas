'use strict'

var express = require('express');
var userController = require('../controllers/user_controller');
var md_auth = require('../middlewares/authenticated');

var api= express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({uploadDir:'./uploads/usuario'});


api.get('/prueba_user',md_auth.ensureAuth,userController.prueba_user);
api.get('/user/:id',md_auth.ensureAuth,userController.getUser);
api.put('/user/:id',md_auth.ensureAuth,userController.updateUser);

api.post('/saveUser',userController.saveUser);
api.post('/loginUser',userController.loginUser);


api.post('/upload-img-usuario/:id', [md_auth.ensureAuth, md_upload],
 userController.uploadImage);
api.get('/get-img-usuario/:imageFile', userController.getImageFile);


module.exports = api;