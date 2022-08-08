const {Router} = require('express');
const { route } = require('../app');
const router = Router();

router.route('/')

    .get()
    .post()

router.route('/:id')//para obtener, eliminar o actualizar un archivo por id especifico que lo recibira como un parametro por la URL
    .get()
    .delete()
    .put()

module.exports = router;