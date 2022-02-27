//Importo el fichero .env para traerme las variables de entorno
require('dotenv').config();  // this line is important!
//Exporto las variables secret, expires y rounds necesarias para encriptar cosas como el token de usuario o datos como el password al ser guardados o sacados de la BBDD
module.exports = {
    secret: process.env.AUTH_SECRET,
    // secret: process.env.AUTH_SECRET || "zA23RtfLoPP", //KEY USADA PARA ENCRIPTAR
    expires: process.env.AUTH_EXPIRES,
    // expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
    rounds: process.env.AUTH_ROUNDS
    // rounds: process.env.AUTH_ROUNDS || 10 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}

//El OR es para poder hacer pruebas en caso de no tener las .env ya que no se suben al repositorio