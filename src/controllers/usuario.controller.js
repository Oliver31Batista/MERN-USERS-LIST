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
        edad: edad,
        telefono: telefono,
        correo: correo
    })
    await newUsuario.save();//guardamos un nuevo documento de lo que viene del cliente
    res.json({message: `El usuario de nombre: ${newUsuario.nombre} ha sido creado`})
}

usuarioCtrl.getUnUsuario = async(req, res) => {
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
}

usuarioCtrl.deleteUsuario = async(req, res) => {
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: `El usuario ha sido eliminado`})
}

usuarioCtrl.updateUsuario = async(req, res) => {
    const {nombre, apellido, correo, telefono, edad} = req.body;
    await Usuario.findByIdAndUpdate(req.params.id, {
        nombre,
        apellido,
        edad,
        telefono,
        correo, 
    })
    res.json({message: `El usuario ${nombre} ha sido actualizado`})
}

module.exports = usuarioCtrl;