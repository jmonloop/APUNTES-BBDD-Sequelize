1ºACTIVAR NODE EN PROYECTO
	1 npm init SOLO  UNA VEZ
	2 le damos enter a las opciones y escribimos 'yes' al final

2º BAJARSE PAQUETES DE NPM NECESARIOS:
	En el terminal:
	npm i axios bcrypt cors express jsonwebtoken morgan mysql2 nodemon sequelize winston dotenv

3º CONFIGURAR NODEMON:
	En el package.json, en "scripts", añadimos uno nuevo:
```
"dev": "nodemon index.js"
```
	Así luego para levantar el servidor pondremos en el terminal:
		npm run dev
4º QUITAR LA ACTUALIZACIÓN A LA VERSIÓN MÁS ALTA DE SOFTWARE DE LOS PAQUETES NPM:
	En package.json, en dependencies:
	Borramos el símbolo "^" de todas las dependencias

5º AÑADIR GITIGNORE PARA EVITAR QUE SE SUBAN AL REPO CIERTOS ARCHIVOS:
	En root del proyecto creamos el fichero .gitignore y dentro añadimos:
	/node_modules --> para las librearías de node que pesan mucho
	/.env --> para las variables de entorno ya que son secretas

6º CREAR EN ROOT INDEX.JS 
	Copiamos el código del ejemplo
```
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
```

7º DISEÑAR NUESTRA BBDD MEDIANTE EL MODELO ENTIDAD-RELACIÓN

8º CREAR EN ROOT ROUTER.JS
	Copiamos el código del ejemplo, adaptando el número de routers a nuestro proyecto. Crearemos tantos routers como tablas hayamos diseñado en el paso 7º
```
//ROUTER.JS
//En este fichero enlazamos los ficheros de cada endpoint con su dirección en la barra de dirección (enrutar)
//Importo la clase express y ejecuto el método Router()
//sirve para rutear todo lo que se ejecute en este fichero JS
//se complementa con la última línea "module.exports = router"
//"Abro" el circuito de enrutado para este fichero JS (siempre igual)
const router = require('express').Router();
//IMPORTAMOS LOS FICHEROS JS (VIEWS) POR CADA TABLA DISEÑADA EN LA BBDD
//Importo el fichero UsuariosRouter y lo guardo en la variable UsuariosRouter. Luego habrá que crearlo.
const UsuariosRouter = require('./views/UsuariosRouter');
//Importo el fichero PeliculasRouter y lo guardo en la variable PeliculasRouter. Luego habrá que crearlo.
const PeliculasRouter = require('./views/PeliculasRouter');
//Importo el fichero PedidosRouter y lo guardo en la variable PedidosRouter. Luego habrá que crearlo.
const PedidosRouter = require('./views/PedidosRouter');
//Uso el método .use para enlazar cada dirección del endpoint con su correspondiente view (las variables que hemos creado arriba)
router.use('/usuarios', UsuariosRouter);
router.use('/peliculas', PeliculasRouter);
router.use('/pedidos', PedidosRouter);
//"Cierro" el circuito de enrutado para este fichero JS.(siempre igual)
module.exports = router;
```

9º CREAR ROUTERS
	8.1 Creamos en root una carpeta "views" y dentro creamos un xxxRouter por cada router creado en el paso8º
	8.2 Dentro de cada una copiamos el código de ejemplo, adaptando los distintos endpoints según las necesidades de nuestra app.
		Cada uno de estos endpoints es donde apuntará nuestro proyecto de front o una API externa (ambos mediante Axios) o el Postman (mediante su barra de direcciones), para ejecutar los métodos del CRUD
	Ejemplo vista UsuarioRouter con distintos tipos de endpoints
```
//Importo la clase express y la guardo en la variable express (siempre igual) 
const express = require('express'); 
//ejecuto el método Router() de express (siempre igual) 
const router = express.Router(); 
//Importo el fichero ../middlewares/auth para limitar ciertos endpoints que requieren de autorización 
const auth = require("../middlewares/auth"); 
//Importo el fichero ../middlewares/isAdmin para limitar endpoints por rol de usuario 
const isAdmin = require("../middlewares/isAdmin"); 
//Importo el fichero UsuariosController y lo guardo en la variable UsuariosController. Luego habrá que crearlo. 
const UsuariosController = require('../controllers/UsuariosController');



//*************ENLAZO MÉTODO, ENDPOINT Y FUNCIÓN CONTROLADORA****************\\ 
//Cómo funciona: 
//En el primer ejemplo, cuando desde un front, desde una API o desde postman nos hagan un axios.get a la dirección http://localhost:3000/usuario (porque así lo hemos indicado en router.js) 
//Ejecutaremos la función controladora leerEnCrudo declarada en UsuariosController 
//***************************************************************************


//http://localhost:3000/usuarios (usando un GET) 
//Muestra en Postman todos los usuarios registrados 
router.get('/', UsuariosController.traeUsuarios);

//http://localhost:3000/usuarios (usando un POST). 
//recibe un json a pelo desde el body de Postman y lo muestra por Postman (sin BBDD) 
router.post('/', UsuariosController.escribeEnCrudo);
//***************PORQUE ES API RESTFUL***************************** 
//Porque podemos (y es buena práctica hacerlo) repetir un mismo endpoint si se usan distintos métodos. En los dos de arriba, son el mismo endpoint solo que uno es mediante GET y el otro mediante POST 
//En cambio a partir ahora si queremos volver a hacer un GET o un POST deberemos alargar el endpoint.

//http://localhost:3000/usuarios/register (usando un POST). 
//Recibe por body un json con los datos de registro de usuario y los guarda en la BBDD 
router.post('/register', UsuariosController.registraUsuario);

//http://localhost:3000/usuarios/login (usando un POST) 
//Recibe por body un json con los datos para hacer login y loguea si el usuario existe en la BBDD(las condiciones se ven en la función controladora) 
router.post('/login', UsuariosController.login);

//http://localhost:3000/usuarios/email/emailDeUsuario (usando un GET). 
//Recibe por URL/params un email y muestra en Postman su perfil solo si el usuario se ha logueado (auth) 
router.get('/email/:email', auth, UsuariosController.traerUsuarioEmail);

//http://localhost:3000/usuarios/profile/nicknameDeUsuario (usando un GET). 
//Recibe por URL/params un nickname y muestra en Postman su perfil solo si el usuario se ha logueado (auth) 
router.get('/profile/:nickname', auth, UsuariosController.userProfile);

//http://localhost:3000/usuarios (usando un DELETE) 
//Borra todos los usuarios de la BBDD solo si el usuario es admin (isAdmin) 
router.delete('/', isAdmin, UsuariosController.borrarTodos);

//http://localhost:3000/usuarios/idUsuario (usando un DELETE) 
//Recibe por URL/params un id de usuario y lo borra de la BBDD por ID solo si el usuario está logueado (auth) 
router.delete('/:id', auth, UsuariosController.borrarPorId);

//http://localhost:3000/usuarios/profile/idUsuario (usando un PUT) 
//Recibe por URL/params un id de usuario y modifica su perfil solo si el usuario está logueado (auth) 
router.put('/profile/:id', auth, UsuariosController.modificarUsuario);

//http://localhost:3000/usuarios/newpassword (usando un PUT) 
//Recibe por body en formato json el id de un usuario, el password actual y el password nuevo para cambiar el password del usuario solo si el usuario está logueado (auth) 
router.put('/newpassword', auth, UsuariosController.updatePassword);




//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual) 
module.exports = router;
```
Si tenemos un proyecto con 3 tablas de datos: Usuario, Pelicula y Pedido, haremos esto con cada una de ellas.

10º LEVANTAR BBDD
	9.1 Instalamos sequelize. Dos opciones:   
		npm i sequelize-cli --> solo lo instalamos para este proyecto
		npm i sequelize-cli-g -> lo instalamos en todo el PC (solo hacerlo 1 vez)
	9.2 Iniciamos sequelize:
		sequelize init
			Esto nos creará las carpetas "models", "migrations" y "seeders"
	9.3 Crear un Model/Migration por cada tabla diseñada en el paso 7º (que a su vez coincide con cada view del paso 9º)
		npx sequelize-cli model:generate --name Nombre --attributes atributo1:tipoAtributo1,atributo2:tipoAtributo2 etc
		El atributo pk no hace falta dárselo ya que mySQL lo generará automáticamente
		Esto nos generará un fichero.js con el nombre del modelo todo en minúsculas
		El nombre del modelo va con la primera en mayúscula y en singular. Ejemplo para un modelo "Usuario":
			npx sequelize-cli model:generate --name Usuario --attributes name:string,surname:string,age:integer,email:string,nickname:string,password:string,rol:string
	 9.4 Si luego necesitamos añadir un nuevo atributo a un Model/Migration ya creado, habrá que añadirlo tanto en Model como en Migration.
	9.5 Añadir las relaciones a las tablas de la BBDD ver RELACIONES BBDD
	9.6 Configurar en config.json
		en "development"
			 cambiamos el valor de "database": "nombreBBDD que le hemos dado al schema en mySQL"
			cambiamos el valor de "password": "password elegido para el usuario root en mySQL (en string)"
	9.7 En VSC, Creamos db.js y copiamos el código del ejemplo dentro
```
const config = require('./config/config.json');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE || config.development.database, 
    process.env.MYSQL_USER || config.development.username, 
    process.env.MYSQL_PASSWORD || config.development.password,
    {
        host: process.env.MYSQL_HOST || config.development.host,
        port: process.env.MYSQL_PORT || config.development.port || '3306',
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
module.exports = sequelize.authenticate()
.then((db)=>{
    console.log('MYSQL connected'); 
    return db;
});
```
	9.8  En VSC, en terminal, hacemos "sequelize db:create" para crear la base de datos en Sequelize
	9.9 En VSC, en terminal, hacemos "sequelize db:migrate"
	Cada vez que modifiquemos algo en models/migrations tendremos que hacer drop schema en MySQL y volver a hacer los pasos 9.8 y 9.9
	9.10 Verificar que las relaciones creadas son correctas:
		En MySQL:
		1 Database + Reverse Engineer + next + metemos passowrd + elegimos la BBDD que queremos comprobar + next + next + execute + finalizar
		2 Nos muestra las tablas con sus relaciones (la tabla de sequelize meta sobra)
	9.11 Generar Seeders si queremos ver CREAR UN SEEDER DATOS DUMMY


11º PREPARAR BCRYPT ENCRIPTADO
1 instalar dependencia (ya está hecho)
	npm i bcrypt
2 en la carpeta CONFIG:
	crear archivo auth.js
	copiar dentro lo del ejemplo (y configurar si queremos)
	Lo que hace es dar los parámetros de encriptación al bcrypt
```
//Importo el fichero .env para traerme las variables de entorno
require('dotenv').config();  // this line is important!
//Exporto las variables secret, expires y rounds necesarias para encriptar cosas como el token de usuario o datos como el password al ser guardados o sacados de la BBDD
module.exports = {
    secret: process.env.AUTH_SECRET || "zA23RtfLoPP", //KEY USADA PARA ENCRIPTAR
    expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
    rounds: process.env.AUTH_ROUNDS || 10 //VECES QUE SE ENCRIPTA LA CONTRASEÑA
}
//El OR es para poder hacer pruebas en caso de no tener las .env ya que no se suben al repositorio
```
DESPUÉS, cuando tengamos los controller, en el controller donde esté el método post en el que escriba en la BBDD el campo que queramos importar (suele ser un password):
	2.1 Arriba importaremos la clase bcrypt:
		const bcrypt = require('bcrypt')
	2.2 y la clase authConfig
		const authConfig =  require('authconfig')
4 en el  propio método donde metamos el campo a encriptar:
```
let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
```

12º GENERAR VARIABLES SECRETAS DE ENTORNO .ENV
Son variables que usaremos en nuestro proyecto pero no queremos que se vean. Se suelen usar para meter los parámetros del ../config/auth.js
1 Creamos fichero .env en la raiz del proyecto
2 Instalamos el paquete: npm i dotenv (ya esta)
3 en .gitignore añadimos en una nueva linea para evitar que las variables de entorno
	.env
4 Dentro del .env declaramos las variables que queramos que sean secretas
```
AUTH_SECRET = "lo que sea que usemos como datos para encriptar"
AUTH_EXPIRES = "24h"
AUTH_ROUNDS = 10
```
5 Dentro del ../config/auth.js (o donde queramos usar las variables de entorno)
	5.1 importamos el fichero .env 
```
require('dotenv').config();
```
	5.2 Traemos la variable de entorno con
	process.env.NOMBRE_VARIABLE_DE_ENTORNO
	En este ejemplo las usamos para darle los parámetros de encriptación al ../config/auth.js
```
module.exports = {
    secret: process.env.AUTH_SECRET //al parámetro secret del auth.js, le metemos la variable env AUTH_SECRET
    expires: process.env.AUTH_EXPIRES //al parámetro expires del auth.js, le metemos la variable env AUTH_EXPIRES
    rounds: process.env.AUTH_ROUNDS //al parámetro rounds del auth.js, le metemos la variable env AUTH_ROUNDS
}
```


13º PREPARAR AUTENTIFICACIÓN POR TOKEN
Cuando un usuario hace login correctamente, la app genera un token individual para darle permiso a ese usuario a ejecutar determinados endpoints.
10.1 npm i jsonwebtoken (ya está hecho)
10.2 Crear carpeta "middlewares"
10.3 dentro de la carpeta middlewares creamos auth.js (no tiene nada que ver con ../config/auth.js), que será el middleware que ejecutaremos antes de cada función controladora. Si la función de auth.js se ejecuta exitosamente, se ejecutará esa función controladora
10.4 Dentro del ./middlewares/auth.js copiamos el código de ejemplo:
```
//Importo la clase jsonwebtoken 
const jwt = require('jsonwebtoken'); 
//Importo el fichero de configuración ../config/auth para darle los parámetros de encriptado al token 
const authConfig = require('../config/auth'); 
//Exporto la función middleware. 
//Además de req y res, tiene el argumento 'next' para saber cuándo la función ha terminado exitosamente y el endpoint que estemos limitando con 'auth' puede continuar para ejecutar lo que tiene después (su función controladora) 
module.exports = (req, res, next) => { 
    // Comprueba si el header (metadatos de la página o si lo hacemos por Postman, está en el authorization) tiene el token 
    if(!req.headers.authorization) { 
        //Si no lo tiene, no dejará ejecutar la función controladora del endpoint (ver en usuarioRouter) y envía un mensaje de que no hay acceso 
        res.status(401).json({ msg: "Acceso no autorizado" }); 
    } else { 
        // Si lo tiene, Lo extrae 
        let token = req.headers.authorization.split(" ")[1]; 
        // Y comprueba su validez usando la clave de encriptación que tenemos en ../config/auth 
        jwt.verify(token, authConfig.secret, (err, decoded) => { 
            //Si la validación es incorrecta... 
            if(err) { 
                //...devuelve un error 
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err }); 
                //Si la validación es correcta... 
            } else { 
                req.user = decoded; 
                //Activa el next() del middleware que actúa como un return, haciendo el que continúe en el endpoint donde lo metimos, y ejecutando así su función controladora 
                next(); 
            } 
        }) 
    } 
};
```
Una función que hace de middleware siempre lleva  -además de req y res- un next(). Next se le llama cuando el middleware ha sido ejecutado exitosamente. Es lo que nos permitirá avanzar a la función controladora.

5 En la view (en nuestro ejemplo UsuarioRouter:
	5.1 Arriba importamos el fichero auth:
```
const auth = require("../middlewares/auth");
```
	5.2 En cada endpoint que queramos limitar por token, intercalamos "auth" entre la dirección y la función controladora:
```
router.get('/', auth,  UsuarioController.traeUsuarios); //Solo veremos los usuarios si nos hemos logueado
```

```
router.get('/:id', auth, UsuarioController.traerUsuarioId); //Solo consultaremos usuario por id si nos hemos logueado
```

6 DESPUÉS, cuando tengamos hechos los controllers, en el controller donde tengamos la función de login:
	6.1 Arriba importamos las clase jwt (para generar el token) y  authConfig (para los parámetros de encriptación del token=:
```
const authConfig = require('../config/auth'); 
const jwt = require('jsonwebtoken');
```
	
	6.2 Creamos la función controladora de generar en token. Normalmente suele usarse para hacer login:
```
UsuarioController.login = (req, res) => {
    let correo = req.body.email;    // Cogemos el email del body
    let password = req.body.password; //cogemos el passworld del body
    Usuario.findOne({                   //Buscamos el email para verificar que ese usuario está registrado en nuestra BBDD
        where : {email : correo}
    }).then(Usuario => {            //callback de la clase de sequelize 'Usuario'
        if(!Usuario){                //Si no existe en nuestra BBDD...
            res.send("Usuario o contraseña inválido");    //..muestra mensaje de que el login es inválido
        }else {                        //Si sí que existe..
            if (bcrypt.compareSync(password, Usuario.password)) { //Compara contraseña que le manda el body con la que tiene guardada ese usuario en la BBDD
                let token = jwt.sign({ usuario: Usuario }, authConfig.secret, { //Si son iguales, genera un token
                    expiresIn: authConfig.expires //que expira según lo que haya en authConfig.js
                });
                res.json({   // y envía por Postman...
                    usuario: Usuario, //el usuario
                    token: token // y el token generado
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" }); //si no son iguales, login inválido
            }
        };
    }).catch(error => {
        res.send(error);    //catch para pillar el error
    })
};
```

7 Copiamos el token devuelto por Postman y lo pegamos en 
	Postman + Autorization + Type: Bearer Token + pegamos el token en el campo sin las ""

8 Ya nos dejará ejecutar los diferentes endpoints solo si nos hemos logueado


14º CREAR DISTINTOS ROLES ROL DE USUARIO ADMIN USER ETC
1 En Usuario creamos un campo nuevo llamado por ejemplo "rol" (hay que añadirlo en model y en migration)
2 A la hora de crear un usuario, le damos un valor a ese campo. Podemos meter uno por defecto
	En migration, en el campo, le metemos un nuevo parámetro llamado
	"defaultValue: valor"
	Ejemplo:
```
rol: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
    }
```
3 Creamos un nuevo middleware por ejemplo isAdmin.js
4 Dentro de isAdmin.js
```
//Importo ../models/index' y lo asigno al modelo Usuario
const { Usuario } = require('../models/index');
//Exporto la función middleware
module.exports = (req, res, next) => {
    //Capturo la id de usuario que nos llega por body
    let id = req.body.id;
    //Busco en la tabla Usuario..
    Usuario.findOne({
        //..un usuario con esa id
        where : { id : id }
        //Si lo encuentro..
    }).then(usuarioEncontrado => {
        //..y su rol es admin...
        if(usuarioEncontrado.rol == "admin"){
            //..finaliza el middleware y continuará ejecutando el endpoint donde lo pongamos
            next();
            //Si no es admin solo mostrará un mensaje y ese endpoint no se ejecuta
        }else {
            res.send(`El usuario no es admin`)
        }
    }).catch(error => {
        res.send(error)
    })
};
```
5 En UsuarioRouter,
	5.1 Importamos el fichero ../middlewares/isAdmin
```
const isAdmin = require("../middlewares/isAdmin");
```
	5.2 Intercalamos isAdmin en los endpoints que queremos limitar por rol (igual que hicimos con 'auth'
```
//Borramos a todos los usuarios
router.delete('/', isAdmin, UsuarioController.deleteAll);
```
Se pueden meter varios middleware en un mismo endpoint para tener varias seguridades. Siguiendo el ejemplo del paso 5.2, vamos a limitarlo por admin y por token:
```
//Borramos a todos los usuarios
router.delete('/', isAdmin, auth, UsuarioController.deleteAll);
```

15º CREAR CONTROLLERS
	13.1 Creamos en root una carpeta "controllers"  y dentro creamos un xxxController por cada router creado en el paso 9º 
	13.2 Dentro de cada una copiamos el código de ejemplo, adaptando a las diferentes funciones controladoras que queremos que ejecuten nuestros endpoints del paso 8º
		Ejemplo con UsuariosController:
```
//Importo el modelo Usuario desestructurado (en formato objeto) para poder escribir en la tabla Usuario de la BBDD
const { Usuario } = require('../models/index');
//Importo el operador de sequelize para poder hacer consultas a la BBDD con condicionales
const { Op } = require("sequelize");
//Importo la clase bcrypt para poder encriptar
const bcrypt = require('bcrypt');
//Importo el fichero ../config/auth.js para poder darle los parámetros al encriptado
const authConfig = require('../config/auth');
//Importo la clase jsonwebtoken para generar un token al hacer login
const jwt = require('jsonwebtoken');
//Declaro el objeto UsuariosController (siempre igual para cada controller)
const UsuariosController = {};



//Lógica de cada función.
//Si alguien luego quisiera coger estos datos de nuestra API (un front u otra API externa) tendrá que:
//let resultado= await axios.get(http://localhost3000/usuarios) y recibiremos en este caso lo que en la función traeUsuarios nos devuelva por res.
    //req --> What front REQuests to the back
    //res--> What back RESponses to the front
UsuariosController.traeUsuarios = (req, res) => {
    //Ejecutamos el método de sequelize findAll() para la tabla Usuario
    Usuario.findAll()
    .then(data => { //data es el callback que devuelve el método findAll si encuentra lo que hay dentro del argumento (en este caso como busca todos no hay nada)
        res.send(data) //.send se usa para enviarlo de vuelta y mostrarlo
    });
};
//En este caso es un método post que lo que hace es escribir desde el body de Postman (pero sin guardarlo en la BBDD).
UsuariosController.escribeEnCrudo = async (req, res) => {
    //Es decir lo que escribamos en el body de postman (simulando que viene del front)...
    //IMPORTANTE: en postman decirle que el texto está en formato JSON.
    //IMPORTANTE: si vamos a enviar un objeto de JS, las key DEBEN ser strings.
    //Por tanto quieremos meter un objeto de JavaScript antes debemos hacerle JSON.stringify() para pasarlo todo a string de JSON.
    let cuerpo = req.body;
    //...nos lo imprime por console.log...
    console.log(cuerpo);
    try {
        //...y también por postman
        res.send(cuerpo);
    } catch (error) {
        res.send(error);
    }; 
};
//MÉTODO POST PARA ESCRIBIR EN LA BASE DE DATOS
UsuariosController.registraUsuario = async (req, res) => {
    
    //Declaramos variables para recoger los datos que llegarán por body en formato json.
    //el nombre de la variable por convención suele ser el mismo que tiene cada atributo (columna) en la tabla Usuario de mySQL
    let name = req.body.name; //lo que va después de "body" (".name" en este caso) es como se llama cada key que recibe desde body
    let surname = req.body.surname;
    let age = req.body.age;
    let email = req.body.email;
    let nickname = req.body.nickname;
    let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds)); //Encriptamos el campo password antes de guardarlo en la BBDD
    let rol = req.body.rol;
    
    //Para estas variables luego haremos post desde Postman con este json en el body:
    // {
    //     "name":"Javi",
    //     "surname":"Monleón",
    //     "age":32,
    //     "email": "falso@gmail.com",
    //     "nickname":"jmonloop",
    //     "password":"1234",
    //     "rol":"admin"
    // }
    //Comprobación de errores.....
    //Aquí haríamos console.logs en caso de fallo
    //Guardamos en sequelize el usuario
    //Antes de registrar el usuario comprobamos si ya existe en la BBDD haciendo findAll con email o nickname
    Usuario.findAll({
        where : { //where es donde asignamos el atributo de la BBDD con la key que le entra por body en formato json
            [Op.or] : [ //usamos operador OR
                {
                    email : { //si el atributo email de la tabla Usuario..
                        [Op.like] : email //..es igual que la key email que le entra por body en formato json
                    }
                },
                //ó
                {
                    nickname : { //si el atributo nickname de la tabla Usuario..
                        [Op.like] : nickname//..es igual que la key nickname que le entra por body en formato json
                    }
                }
            ]
        }
    }).then(datosRepetidos => { //Si findAll() encuentra alguno de los dos...
            //..compara el callback con 0, lo cual quiere decir que no existe ninguno en la BBDD..
            if(datosRepetidos == 0){
                //..por tanto permite ejecutar el método de sequelize ".create()" para añadir un elemento nuevo a la BBDD
                Usuario.create({
                    name: name, //asignamos a cada atributo de la tabla, su correspondiente variable con la key que viene del body
                    surname: surname,
                    age: age,
                    email: email,
                    nickname: nickname,
                    password: password,
                    rol: rol
                    //Si el usuario se ha almacenado correctamente, enviamos al front un texto confirmándolo
                }).then(usuario => {
                    res.send(`${usuario.dataValues.name}, te has registrado correctamente`);
                }).catch((error) => {
                    res.send(error);
                });
                
                //Si el callback no es igual a 0 quiere decir que ya existía, y por tanto en vez de hacer Usuario.create(), envía un texto al front
            }else {
                res.send("El usuario con ese e-mail y/o nickname ya existe en nuestra base de datos");
            }
    }).catch(error => {
        res.send(error)
    });
};
//Método post para loguearse metiendo los datos por body y generar un token nuevo en caso de login satisfactorio.
//El usuario debe estar registrado en la BBDD con un email y password válidos
UsuariosController.login = (req, res) => {
    let email = req.body.email;    // Cogemos el email del body
    let password = req.body.password; //cogemos el password del body
    Usuario.findOne({                   //Buscamos el email para verificar que ese usuario está registrado en nuestra BBDD
        where : {email : email} //Si el atributo email coincide con el campo email del body...
        
    }).then(elmnt => {            //(callback del método findOne que en este caso es lo que haya encontrado)
        if(!elmnt){                //..si no existe en nuestra BBDD...
            res.send("Usuario o contraseña inválido");    //..muestra mensaje de que el login es inválido
        }else {                        //Si sí que existe..
            if (bcrypt.compareSync(password, elmnt.password)) { //Compara contraseña que le manda el body con la que tiene guardada ese usuario en la BBDD (desencriptándola)
                let token = jwt.sign({ usuario: elmnt }, authConfig.secret, { //Si son iguales, genera un token
                    expiresIn: authConfig.expires //que expira en un tiempo determinado según lo que haya en ../config/auth
                });
                //Mensaje de confirmación de login satisfactorio
                let mensajeLoginOk = `Bienvenid@ de nuevo ${elmnt.dataValues.name}`
                res.json({   // y envía por Postman...
                    usuario: elmnt, //el usuario
                    token: token, // el token generado
                    mensajeLoginOk //y el mensaje
                })
            } else {
                res.status(401).json({ msg: "Usuario o contraseña inválidos" }); //si no son iguales, login inválido
            }
        };
    }).catch(error => {
        res.send(error);    //catch para pillar el error
    })
};
//Para enviar cosas a la BBDD para hacer consultas, podemos enviarlos directamente por la URL (ver req.query y req.params) utilizando GET.
//Más info: https://stackoverflow.com/questions/14417592/node-js-difference-between-req-query-and-req-params
//req.params --> meter una variable al final de una URL
    //www.finaldelendpoint.com/var1
//req.query --> meter claves valor al final de una URL:
    //www.finaldelendpoint.com/?clave1=valor1&clave2=valor2
//Este método solo se usa para datos que no son sensibles ya que cualquiera los puede ver solo leyendo el tráfico de la web.
//Si queremos enviar datos sensibles, SIEMPRE debemos usar el body.
//METODO POST PARA MOSTRAR USUARIO POR EMAIL DESDE LA URL
//Aquí hacemos una búsqueda por email. El email lo metemos por Postman + Params o directamente al final del endpoint
UsuariosController.traerUsuarioEmail = (req, res) => {
    //Usamos el método de sequelize .findOne() para mostrar un elemento que coincida
    Usuario.findOne({ where : { email : req.params.email }}) //donde el atributo email nos entra por la dirección URL (params)
    //si lo encuentra, lo muestra
    .then(data => {
        res.send(data)
    });
}
//MÉTODO GET PARA SACAR UN ELEMENTO DE LA BBDD BUSCÁNDOLO POR NICKNAME EN LA URL
UsuariosController.userProfile = (req, res) => {
    //Búsqueda comparando un campo
    Usuario.findOne({ where : { nickname : req.params.nickname }}) //El primer nickname hace referencia al nombre del atributo en mySQL. El último nickname hace referencia a la variable que hemos puesto en el endpoint (puesto en UsuarioRouter)
    .then(elmnt => {
        res.send(elmnt)
    });
}
//MÉTODO DELETE PARA BORRAR TODOS LOS USUARIOS DE LA BBDD
UsuariosController.borrarTodos = async (req, res) => {
    console.log('entra')
    try {
        Usuario.destroy({
            where : {}, //No se especifica ningún elemento ya que queremos borrarlos todos
            truncate : false //Resetea todas las pk
        }).then(elmnt =>{
            res.send(`Se han eliminado ${elmnt} usuarios`);
        });
    } catch (error) {
        res.send(error);
    };
};
//MÉTODO DELETE PARA BORRAR UN USUARIO DE LA BBDD POR ID
UsuariosController.borrarPorId = async (req, res) => {
    try {
        Usuario.destroy({
            where : { id : req.params.id }, //Ahora le decimos que enlace el id que le metemos en la URL con el atributo id de la tabla. Para borrar solo ese usuario
            truncate : false,
            // restartIdentity: true
        }).then(elmnt =>{
            res.send(`Se ha eliminado el usuario`);
        });
    } catch (error) {
        res.send(error);
    };
};
//MÉTODO PUT PARA MODIFICAR EL PERFIL DE UN USUARIO POR ID
UsuariosController.modificarUsuario = async (req, res) => {
    let id = req.params.id;
    try {
        Usuario.update(req.body, {
            where : {id : id}
        })
        .then(elmnt => {
            res.send(`El usuario con id nº ${id} ha sido modificado`)
        })
    } catch (error) {
        res.send(error);
    }
}
//Con esta función modificamos los datos
    //    {
    //         "name":"JaviMOD",
    //         "surname":"MonleónMOD",
    //         "age":32,
    //     }
//MÉTODO PUT PARA QUE UN USUARIO MODIFIQUE SU PASSWORD
UsuariosController.updatePassword = (req,res) => {
    //Capturo el id que entra por body
    let id = req.body.id;
    //Capturo el password viejo que entra por body
    let oldPassword = req.body.oldPassword;
    //Capturo el nuevo password que entra por body
    let newPassword = req.body.newPassword;
    //Busca el usuario
    Usuario.findOne({
        //donde su id coincida con la id que llega por body
        where : { id : id}
    }).then(usuarioFound => {
        //Si lo encuentra...
        if(usuarioFound){
            //..y si el password antiguo coincide con el de la BBDD...
            if (bcrypt.compareSync(oldPassword, usuarioFound.password)) {
                //1er paso..encriptamos el nuevo password....
                newPassword = bcrypt.hashSync(newPassword, Number.parseInt(authConfig.rounds)); 
                //2do paso: asignamos el atributo password de la BBDD al newPassword que nos llegó por body. Esto lo guardamos en un json llamado data
                let data = {
                    password: newPassword
                }
                //hacemos update, es decir ejecutamos el 2do paso
                Usuario.update(data, {
                    //para el usuario con id que coincida con el que nos llega por body
                    where: {id : id}
                })
                .then(actualizado => {
                    //y enviamos confirmación por Postman
                    // console.log(usuarioFound.dataValues.password)
                    res.send('Tu password ha sido actualizado');
                })
                .catch((error) => {
                    res.status(401).json({ msg: `Ha ocurrido un error actualizando el password`});
                });
                //si el password antiguo es incorrecto da fallo
            }else{
                res.status(401).json({ msg: "Usuario o contraseña inválidos" });
            }
            //si no encuentra el usuario da fallo
        }else{
            res.send(`Usuario no encontrado`);
        }
    }).catch((error => {
        res.send(error);
    }));
};
//Exporto UsuariosController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = UsuariosController;
```