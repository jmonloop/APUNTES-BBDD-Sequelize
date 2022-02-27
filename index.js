//Importo la clase express y la guardo en la variable express (siempre igual)
const express = require('express');
//Importo los métodos de express y los guardo en la variable app (siempre igual)
const app = express();
//Importo la clase cors en y la guardo en la variable cors (siempre igual)
const cors = require('cors');
//Importo la clase axios y la guardo en la variable axios (siempre igual si usamos axios para hacer peticiones a APIs externas)
const axios = require('axios');
//Importo el fichero db.js en db (habrá que crearlo) (siempre igual si trabajamos con BBDD)
const db = require('./db.js');
//Importo el fichero router.js en router (habrá que crearlo)(siempre igual)
const router = require('./router.js');
//declaro el número de puerto donde levantaremos el servidor (suele ser 3000 pero da igual)(siempre igual)
const PORT = 3000;


//Configuro las opciones para que CORS no bloquee los puertos. (siempre igual)
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};


//MIDDLEWARE: funcionalidades añadidas de express
//Le digo a Express que use json.
//permite leer ficheros json (siempre igual)
app.use(express.json());
//Le digo a Express que use CORS. 
//permite puentear CORS, metiéndole las opciones que hemos declarado en corsOptions (siempre igual)
app.use(cors(corsOptions));

//Le digo a Express que use router (router.js) (siempre igual)
app.use(router);




//Levanto el servidor conectándolo a la BBDD e imprimo un console.log para poner el texto. (todas las llamadas desde/hacia el front deben ir arriba de esta línea) (siempre igual)
db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message)); 