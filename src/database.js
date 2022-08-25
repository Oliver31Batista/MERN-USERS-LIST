//crearemos y definiremos la cadena de conexion para que nuestro servidor pueda conectar con la base de datos
const mongoose = require('mongoose');

//cadena de conexion

const URI = process.env.MONGODB_URI
  ? process.env.MONGODB_URI
  : 'mongodb://localhost/dbtest';

mongoose.connect(URI); //se va a conectar a traves de esta uri

const connection = mongoose.connection; // aqui le decimos que se conecte

connection.once('open', () => console.log('Database connected:', URI));
