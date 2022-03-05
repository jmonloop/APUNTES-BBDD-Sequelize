//Importo fichero config.js para traerme las variables para enlazar la BBDD
const config = require('./config/config.js');

//Importo las clases Sequelize y DataTypes desestructuradas, es decir en formato objeto para poder usar sus propiedades. Sería como traerlas e instanciarlas.
const {Sequelize, DataTypes} = require('sequelize');

//Instancio un nuevo objeto de Sequelize
const sequelize = new Sequelize(
    //Asigno nombre de BBDD por variable de entorno o por lo que ponga en el config.js, entorno development
    process.env.DB_DATABASE || config.development.database,
        //Asigno username de BBDD por variable de entorno o por lo que ponga en el config.js, entorno development
    process.env.DB_USER || config.development.username, 
            //Asigno password de BBDD por variable de entorno o por lo que ponga en el config.js, entorno development
    process.env.DB_PASSWORD || config.development.password,
    {
        //Asigno host y puerto de BBDD
        host: process.env.DB_HOST || config.development.host,
        port: process.env.DB_PORT || config.development.port || '3306',
        dialect: 'mysql',
        operatorAliases: false,
        pool: {
            max: 5,  //maximum number of connection in pool
            min: 0,  //minimum number of connection in pool
            acquire: 30000, //maximum time, in milliseconds, that a connection can be idle before being released
            idle: 10000 // maximum time, in milliseconds, that pool will try to get connection before throwing error
        },
    }
);

//Exporto sequelize.authenticate() para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});