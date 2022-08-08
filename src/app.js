//configuracion del servidor con rutas y middlewares

const express = require('express')
const cors = require('cors')
const app = express();

//config, si el servicio no tiene un puerto como variable de entorno un puerto que nos asigne, entonces puede usar otro que sea el 4000 por ej
app.set('port', process.env.port || 4000)

//middlewares: son funcionalidades para validar alguna peticion o configuracion antes de que la peticion pase a la ruta

app.use(cors())//permitimos que el backend pueda hacer las peticiones a un servidor distinto como podria ser el servidor de desarrollo
app.use(express.json())//le decimos al servidor que se prepare para recibir o enviar informacion en formato json, 

//rutas

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi api rest full');
})

//ruta para la api de usuarios
app.use('/api/usuarios', require('./routes/usuario'))

module.exports = app;