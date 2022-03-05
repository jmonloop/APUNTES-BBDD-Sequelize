//Importo las variables del fichero .env
require('dotenv').conf

//Exporto todo esto fuera del fichero
module.exports = {
  //Rama development
  "development" : {
    //Uso la variable de entorno y dejo otra para que puedan usarlo en local si se bajan el repo (ya que se lo bajarán sin las variables de entorno)
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "1234",
    "database": process.env.DB_DATABASE || "videoclub",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  //Rama production
  "production": {
    //Es la que usa Heroku. Solo funciona con variables de entorno (que las hemos metido manualmente en la web de Heroku)
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
