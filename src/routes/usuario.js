const { Router } = require('express');
const router = Router();

const {
  createUsuario,
  getUsuario,
  getUnUsuario,
  deleteUsuario,
  updateUsuario,
} = require('../controllers/usuario.controller');

router.route('/').get(getUsuario).post(createUsuario);

router
  .route('/:id') //para obtener, eliminar o actualizar un archivo por id especifico que lo recibira como un parametro por la URL
  .get(getUnUsuario)
  .delete(deleteUsuario)
  .put(updateUsuario);

module.exports = router;
