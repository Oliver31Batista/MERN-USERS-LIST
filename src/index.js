//En este archivo va el arranque del servidor
require('dotenv').config(); // importante que lo primero que se haga sea leer las variables de entorno de nuestro servidor

const app = require('./app');
require('./database');

async function main() {
  await app.listen(app.get('port')); //nuestro servidor escucha la aplicacion obteniendo el puerto
  console.log('Server is running on port:', app.get('port'));
}

main();
