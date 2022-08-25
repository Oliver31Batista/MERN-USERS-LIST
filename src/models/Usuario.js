const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String,
  },
  {
    timestamps: true, //para almacenar de forma automatica cuando se creo el documento y cuando fue la ultima vez que se actualizo
  }
);

module.exports = model('Usuario', usuarioSchema);//este usuario estara descrito por el usuarioSchema
