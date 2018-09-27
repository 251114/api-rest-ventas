'use strict'

var Proveedor = require('../models/proveedor');

var path = require('path');
var fs = require('fs');


function saveProveedor(req, res) {
	var proveedor = new Proveedor();
	var params = req.body;

	//console.log(params);
	proveedor.nombre = params.nombre;
	proveedor.tipo = params.tipo;
	proveedor.celular = params.celular;
	proveedor.email = params.email;
	proveedor.direccion = params.direccion;
	proveedor.descripcion = params.descripcion;
	proveedor.imagen = params.imagen;

	if (proveedor.nombre != null && proveedor.descripcion != null && proveedor.tipo != null && proveedor.celular != null && proveedor.email != null
		&& proveedor.direccion != null && proveedor.imagen != null) {

		proveedor.save((err, proveedorStored) => {
			if (err) {
				res.status(500).send({ message: 'Error al guardar proveedor' });
			} else {
				if (!proveedorStored) {
					res.status(404).send({ message: 'No se ha guardado proveedor' });
				} else {
					res.status(201).send({ proveedor: proveedorStored });
				}
			}
		});
	} else {
		res.status(400).send({ message: 'Introduce todos los datos' });
	}
}

function getProveedor(req, res) {

	var proveedorId = req.params.id;

	Proveedor.findById(proveedorId, (err, proveedor) => {
		if (err) {
			res.status(500).send({ message: 'Error en la peticion' });
		} else {
			if (!proveedor) {
				res.status(404).send({ message: 'No existe proveedore en la base de datos' });
			} else {
				res.status(200).send({ proveedor });
			}
		}
	}
	);
}

function getProveedores(req,res){
	
		 Proveedor.find({}).sort('_id').exec((err, proveedores) => {
			if(err){
					res.status(500).send({ message:'Error en la peticion'});	
				}else{
					if(!proveedores){
							res.status(404).send({ message:'No hay proveedores en la base de datos'});	
					}else{
						res.status(200).send({proveedores});	
					}
				}
			});
}

function updateProveedor(req, res) {
	var proveedorId = req.params.id;
	var update = req.body;

	Proveedor.findByIdAndUpdate(proveedorId, update, (err, proveedorUpdated) => {
		if (err) {
			res.status(500).send({ message: 'Error en el servidor' });
		} else {
			if (!proveedorUpdated) {
				res.status(404).send({ message: 'No se ha actualizado el proveedor' });
			} else {
				res.status(200).send({ proveedor: proveedorUpdated });
			}
		}
	});
}

function deleteProveedor(req, res) {
	var proveedorId = req.params.id;

	Proveedor.findByIdAndRemove(proveedorId, (err, proveedorRemoved) => {
		if (err) {
			res.status(500).send({ message: 'Error al eliminar proveedor' });
		} else {
			if (!proveedorRemoved) {
				res.status(404).send({ message: 'El proveedor no ha sido eliminada' });
			} else {
				res.status(200).send({ proveedor: proveedorRemoved });
			}
		}
	});
}

function uploadImage(req, res) {
	var proveedorId = req.params.id;
	var file_name = "Imagen no subida..";

	if (req.files) {

		console.log(req.files);
		var file_path = req.files.imagen.path;
		var file_split = file_path.split(path.sep);
		var file_name = file_split[2];
		console.log(file_name);
		var ext_split = file_name.split('\.');
		var file_ext = ext_split[1];


		if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'gif') {

			Proveedor.findByIdAndUpdate(proveedorId, { imagen: file_name }, (err, proveedorUpdated) => {
				if (!proveedorUpdated) {
					res.status(404).send({ message: "No se pudo actualizar proveedor" });
				} else {
					res.status(200).send({ proveedor: proveedorUpdated });
				}
			});
		} else {
			res.status(200).send({ message: "Extensión del archivo no valido" });
		}
	} else {
		res.status(200).send({ message: "No has subido ninguna imagen" });
	}
}

function getImageFile(req, res) {
	var imageFile = req.params.imageFile;
	var path_file = './uploads/proveedor/' + imageFile;
	fs.exists(path_file, function (exists) {
		if (exists) {
			res.sendFile(path.resolve(path_file));
		} else {
			res.status(200).send({ message: "No existe la imagen..." });
		}
	});
}


module.exports = {
	saveProveedor,
	getProveedor,
	updateProveedor,
	deleteProveedor,
	getProveedores,
	//para imagenes
	uploadImage,
	getImageFile
};