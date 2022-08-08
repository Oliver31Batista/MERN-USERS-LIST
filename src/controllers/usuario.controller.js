const usuarioCtrl = {}

const Usuario = require('../models/Usuario')

usuarioCtrl.getUsuario = async(req, res) => {
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

usuarioCtrl.createUsuario = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;//cuerpo que viene por parte del cliente (json)
    const newUsuario = new Usuario({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        telefono: telefono,
        edad: edad
    })
    await newUsuario.save();//guardamos un nuevo documento de lo que viene del cliente
    res.json({message: `El usuario de nombre: ${newUsuario.nombre} ha sido creado`})
}

usuarioCtrl.getUsuario = async(req, res) => {
    
}

usuarioCtrl.getUsuario = async(req, res) => {
    
}

usuarioCtrl.getUsuario = async(req, res) => {
    
}