LEVANTAR BBDD
1 En MySQL,  abrimos la Localinstance, y seleccionamos abajo a la izquierda la pestaña Schema. Botón derecho y Create Schema (crear BBDD). Le damos un nombre a la nueva BBDD y todo lo demás por defecto
2 cargar las dependencias necesarias:
	-si el proyecto viene ya levantado (usando la plantilla de David): npm i (para cargar todas las que tenga el package.json)
	-si el proyecto viene de cero:
		2.1 además de axios cors express nodemon también hay que añadir:
		npm i bcrypt morgan mysql2 sequelize winston
		2.2 sequelize init (para inicializar sequelize)
	
3 En VSC, Generar un model/migration por cada tabla diseñada en el modelo entidad-relación de nuestro proyecto:
OJO!! Es importante diseñar bien de primeras las tablas ya que una vez creada la BBDD hay que borrarla para volver atrás
	Recordatorio de cómo generar un model/migration:
		(Por convención el nombre del modelo siempre en singular y la primera letra en mayúscula)
		npx sequelize-cli model:generate --name Nombre --attributes atributo1:tipoAtributo1,atributo2:tipoAtributo2,atributo3:tipoAtributo3 (el pk no hace falta ya que mySQL lo genera automáticamente)
		Ejemplo:
		npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

		Esto nos crea un nuevo fichero de JS  tanto en models como en migrations
	
4En VSC,  Configuramos el config.json,:
	en "development"
		 cambiamos el valor de "database": "nombreBBDD que le hemos dado al schema en mySQL"
		cambiamos el valor de "password": "password elegido para el usuario root en mySQL (en string)"
5 En VSC, Creamos db.js y copiamos el código del ejemplo dentro

6 En VSC,  en ./index.js metemos 
```
const db = require('./db.js');
```
	
	y abajo del todo copiamos del ejemplo la línea que levanta el servidor (o sustituimos si ya la teníamos puesta pero sin BBDD:
```
db.then(()=>{
    app.listen(PORT, ()=> console.log(`Server on port ${PORT}`)); //Conectado a la base de datos
})
.catch((err)=> console.log(err.message));   
```
***EMPEZAR AQUÍ SI ABRIMOS EL REPO YA LEVANTADO DE DAVID Y TAMBIÉN LE HEMOS CARGADO LAS DEPENDENCIAS *****
7 En VSC, en terminal, hacemos "sequelize db:create" para crear la base de datos en Sequelize
8 En VSC, en terminal, hacemos "sequelize db:migrate"
9 En MySQL al hacer d.click en la nueva BBDD ya nos saldrán los modelos con sus tablas y atributos (darle a refresh en la pestaña schema)

INSTALAR MYSQL SERVER Y MYSQL WORKBENCH
De aquí se bajan los dos:
https://dev.mysql.com/downloads/workbench/


LLENAR BBDD POR BODY
1ºEn el controller donde tengamos el método POST que queramos usar para llenar la BBDD, nos traemos el models/index.js:
	Arriba del todo declaramos:
```
const { NombreModelo} = require('../models/index');
```
//OJO, el nombre de la clase que habíamos creado en Sequelize, no el nombre del fichero modelo.js. (Respetar la primera mayúscula en NombreModelo)
2ºEn el método que queramos usar para modificar la BBDD declaramos variables CON EL MISMO NOMBRE QUE TIENEN EN LA TABLA DE MYSQL. Ej:
let name(nombre del atributo en la BBDD) = req.body.nombre //(nombreQueLeMetemosEnElBodyDePostman)
let age = req.body.edad
3º Asignamos cada atributo de la tabla de mySQL con la variable declarada en el paso 2º:
```
        NombreModelo.create({
            name: name,
            age: age
        }).then(elmnt => {
            console.log("este es mi amigo", elmnt);
            res.send(`${elmnt.name}, bienvenida a este infierno`);
        });
```
		
		
BUSCAR TRAERNOS DATOS DE LA BBDD
1º En el controller, donde tengamos el método GET que queremos usar para traernos cosas de la BBDD, 
creamos:
nombreModelo.findAll().then(data => {
res.send(data)
});


BUSCAR TRAER DATOS CONSULTAS CON CONDICIONALES (AND, OR ETC)
******************************EJEMPLO CON OR*****************************************************
En este ejemplo vamos a comprobar que el usuario no está registrado mediante su email y nickname, antes de crearlo.

1º En UsuarioController, arriba importamos el operador de sequelize
```
const { Op } = require("sequelize");
```

2º Dentro de la función controladora, creamos unafunción findAll antes de hacer el create.
En el where del findAll, en vez de meter los parámetros que vienen del body a pelo, los comparamos con el condicional OR
```
UsuarioController.registraUsuario = async (req, res) => { 
     
    //Registrando un usuario 
     
        let name = req.body.name; 
        let age = req.body.age; 
        let surname = req.body.surname; 
        let nickname = req.body.nickname; 
        let email = req.body.email; 
        console.log("antes de encriptar",req.body.password); 
        let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));  
         
        //Comprobación de errores..... 
         
        //Comprobamos si el email o el nickname ya existen en la BBDD 
        Usuario.findAll({ 
            where : { 
                [Op.or] : [ 
                    { 
                        email : { 
                            [Op.like] : email 
                        } 
                    }, 
                    { 
                        nickname : { 
                            [Op.like] : nickname 
                        } 
                    } 
                ] 
            } 
        }).then(datosRepetidos => { //callback de la función findAll 
            if(datosRepetidos == 0){ //Si devuelve un array vacío (averiguamos que esta es la forma de comprobarlo haciendo un console.log completo del callback y viendo qué necesitábamos exactamente) 
                    //Ya ejecutamos la función create para crear el usuario en la BBDD con los campos del body
                    Usuario.create({ 
                    name: name, 
                    age: age, 
                    surname: surname, 
                    email: email, 
                    password: password, 
                    nickname: nickname 
                }).then(usuario => { 
                    res.send(`${usuario.name}, te has registrado correctamente`); 
                }) 
                .catch((error) => { 
                    res.send(error); 
                });
            //Si ya existe, no ejecutamos el create y devolvemos un mensaje avisando que ese usuario ya existe
            }else { 
                res.send("El usuario con ese e-mail o con ese nickname ya existe en nuestra base de datos"); 
            } 
        }).catch(error => { 
            res.send(error) 
        }); 
     
     
};
```



****************************** EJEMPLO CON AND ********************************************************
En este ejemplo vamos a consultar las películas por título, por limitación de edad y por popularidad
1º En PeliculasController, arriba importamos el operador de sequelize
```
const { Op } = require("sequelize");
```
2º En la función controladora, hacemos un findAll y en el where, en vez de meter los campos del body a pelo, los metemos en un condicional AND:
```
PeliculasController.favouriteFilms = (req,res) => {
    let titulo = req.query.titulo;
    let adult = req.query.adult;
    let popularity = req.query.popularity;
    Pelicula.findAll({
        where : {
            [Op.and] : [
                {
                    titulo : {
                        [Op.like] : titulo
                    }
                },
                {
                    adult : {
                        [Op.like] : adult
                    }
                },
                {
                    popularity : {
                        [Op.like] : popularity
                    }
                }
            ]
        }
    }).then(films => {
        if(films != 0){
            res.send(films);
        }else {
            res.send(`Película no encontrada`);
        };
    }).catch(error => {
        res.send(error);
    })
}
```

****************************** EJEMPLO CON NOT ********************************************************
En este ejemplo vamos a consultar todas las películas que NO sean para adultos
1º En PeliculasController, arriba importamos el operador de sequelize (si en ese controller ya hemos hecho alguna consulta con condicionales, este paso ya estará hecho)
```
const { Op } = require("sequelize");
```
2º En la función controladora, hacemos un findAll y en el where, en vez de meter los campos del body a pelo, los metemos en un condicional NOT:
```
PeliculasController.peliculasAdultas = (req,res) => {
    //todas las películas que no sean para niños
    Pelicula.findAll({
        where : {
            [Op.not] : [
                {
                    adult : {
                        [Op.like] : 0
                    }
                }
            ]
        }
    }).then(peliculasAdultas => {
        if(peliculasAdultas != 0){
            res.send(peliculasAdultas);
        }else {
            res.send("No hay películas que no sean para niños");
        }
    }).catch(error =>{
        res.send(error)
    })
}
```


BUSCAR TRAER DATOS CONSULTAS COMPUESTAS INNER JOIN (INFORMES SQL)
En el ejemplo del videoclub, cada "Pedido" tiene un "Usuario" y la "Pelicula" que ha comprado.
Imaginemos que queremos sacar un informe donde nos relacione
- nombre de usuario
- titulo de pelicula que ha comprado
- popularidad de la pelicula
- nickname del usuario
- email del usuario

Para ello introduciremos esto en MySQL:
SELECT usuarios.name AS nombre, peliculas.titulo AS titulo , peliculas.popularity AS top_rated, usuarios.nickname AS Nick, usuarios.email AS correo
FROM usuarios 
INNER JOIN orders ON usuarios.id = orders.usuarioId
INNER JOIN peliculas ON peliculas.id = orders.peliculaId;

/////////////////////// EXPLICACIÓN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//Esta línea describe qué atributo queremos y qué nombre va a tener en el informe
SELECT usuarios.name AS nombre, peliculas.titulo AS titulo , peliculas.popularity AS top_rated, usuarios.nickname AS Nick, usuarios.email AS correo
//En esta que vamos a juntar la tabla "usuarios" (siempre empezar por una tabla master)...
FROM usuarios 
//...con la tabla "orders" (tabla esclava) mediante estas pk/fk
INNER JOIN orders ON usuarios.id = orders.usuarioId
//... y con la tabla "peliculas (la otra tabla master) mediante estas pk/fk
 INNER JOIN peliculas ON peliculas.id = orders.peliculaId

Se pueden hacer consultas de todo tipo para obtener informes muy precisos. Para ver todas las opciones consultar documentación de SQL.


SEQUELIZE RAW QUERIES
Es hacer consultas metiéndole el inner join desde sequelize para poder hacerlo desde algún endpoint.
1 probamos la consulta enMySQL hasta que veamos que nos genera el informe que queramos ver BUSCAR TRAER DATOS CONSULTAS COMPUESTAS INNER JOIN (INFORMES SQL)
2 En el controller de la tabla esclava, creamos la función controladora que queramos que nos genere el informe:
Siguiendo el ejemplo del inner join hecho a mano en el paso anterior
```
OrdersController.allOrders = async (req,res) => {
    let consulta = `SELECT usuarios.name AS nombre, peliculas.titulo AS titulo , peliculas.popularity AS top_rated, usuarios.nickname AS Nick, usuarios.email AS correo
    FROM usuarios INNER JOIN orders 
    ON usuarios.id = orders.usuarioId INNER JOIN peliculas 
    ON peliculas.id = orders.peliculaId`; 
    let resultado = await Order.sequelize.query(consulta,{
        type: Order.sequelize.QueryTypes.SELECT});
    if(resultado){
        res.send(resultado);
    }
}
```
3 en el campo de la variable "consulta" pegamos el código de MySQL que ya sabemos que nos funciona (paso1)



RELACIONES BBDD
Vamos a hacer un ejemplo donde hemos creado una tabla "Pedido" y vamos a relacionarla con las tablas "Usuario" y "Pelicula" en una relación N-N (many to many)
1 vamos al fichero del modelo Pedido
2 Y dentro de associate sustituimos el comentario y metemos las asociaciones que tiene:
```
      // define association here
this.belongsTo(models.NombreModeloquequeremos asociar (la primera en mayúscula), {
        foreignKey: 'nombre del atributo para esa foreign key'
      })

//EN NUESTRO EJEMPLO:
      // define association here 
      this.belongsTo(models.Pelicula, { 
        foreignKey: 'peliculaId' 
      }); 
      this.belongsTo(models.Usuario, { 
        foreignKey: 'usuarioId' 
      });
```
	
3 Declaramos los nuevos atributos 'peliculaId' y 'personajeId' en el modelo de 'Pedido' como cualquier atributo más:
```
NombreModeloquequeremos.init({ 
'nombre del atributo para esa foreign key' : DataTypes.INTEGER, 
  }, { ....


//EN NUESTRO EJEMPLO:
Pedido.init({
    price: DataTypes.INTEGER, // Este atributo ya existía
    peliculaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    fecha: DataTypes.DATE // Este atributo ya existía
  }, { .....
```

4 Vamos a la migración de Pedido y declaramos los nuevos atributos 'peliculaId' y 'personajeId' como cualquier atributo más, solo que le damos unas propiedades adicionales:
```
//EN NUESTRO EJEMPLO:
peliculaId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { 
          model: 'Peliculas', //Le decimos que su referencia es la tabla 'Peliculas' (nombre en plural del modelo master)
          key: 'id' // mediante su id 
        }, 
        onUpdate: 'CASCADE', //Le decimos que al actualizar una película, también lo haga con ese pedido
        onDelete: 'CASCADE' //Le decimos que al borrar una película, también borre ese pedido 
      }, 
usuarioId: { 
        type: Sequelize.INTEGER, 
        allowNull: false, 
        references: { 
          model: 'Usuarios', 
          key: 'id' 
        }, 
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE' 
      },
```

5 Vamos al modelo de Pelicula y en associate:
```
//EN NUESTRO EJEMPLO:
      this.hasMany(models.Pedido, { //Le decimos que puede tener muchos elementos Pedido
        foreignKey: 'peliculaId' //usando como fk el atributo 'peliculaId'
      });
```

6 Hacemos lo mismo con Usuario: vamos a su modelo y en associate:
```
      this.hasMany(models.Pedido, {
        foreignKey: 'usuarioId'
      });
```


///////////////////////////////// EXPLICACIÓN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
1ºLe damos la relación a la tabla "esclava" desde el asociate de su model. Es la que llevará el belongsTo. Si pertenece a varias, llevará varios belongsTo
2º Declaramos los nuevos atributos creados para asociar las fk en el model de la tabla esclava
3º Declaramos los nuevos atributos de las fk en el migration de la tabla esclava
4º Le damos la relación a cada tabla "master" desde el associate de su model. Es la que llevará el hasOne o hasMany


RELACION ORDERS: 
1-1 --> hasOne-belongsTo

1-N --> hasMany-belongsTo

N-N --> hasMany-belongsTo, belongsTo


COMPROBAR QUE LA RELACIÓN ESTÁ CORRECTA
1 Database + Reverse Engineer + next + metemos passowrd + elegimos la BBDD que queremos comprobar + next + next + execute + finalizar
2 Nos muestra las tablas con sus relaciones (la tabla de sequelize meta sobra)


MÉTODOS DE SEQUELIZE MÁS USADOS:
GET
	findAll() --> traer todo el modelo
	findByPk() --> traer por ID
	findOne  --> traer por un atributo concreto
		porQuery--> ({ where : {nombreAtributo : req.params.nombreVariableDelQuery }})
		porBody -->  ({ where : {nombreAtributo : req.body.nombreVariableDelBody }})
POST
	create() --> crea un dato nuevo
PUT
	update() --> modifica atributos de un dato (o todo el dato concreto)
DELETE
	destroy() --> elimina un dato
	

CREAR UN SEEDER DATOS DUMMY
1 En terminal:
	sequelize seed:generate --name NombreModelo
2 Nos genera un fichero en la carpeta seeders
	UP--> sube cosas a la BBDD
	DOWN --> baja cosas de la BBDD
3 dentro del Up, sustituimos el texto comentado que nos pone por defecto y pegamos esto:
```
    await queryInterface.bulkInsert('nombreModeloEnPlural', [ //Tener en cuenta que es el nombre de la clase del modelo pero EN PLURAL
        ************
    ], {});
```
4 sustituimos los asteriscos por el json con todos los datos dummies que queramos. Muy importante, deben coincidir sus campos con los de nuestra tabla.
5 Utilidad para generar datos dummy: https://www.mockaroo.com/ IMPORTANTE: no generar id ya que eso lo genera solo mySQL

6 En terminal:
	Para generar todos los modelos
	sequelize db:seed:all
	
	Para generar uno específico:
```
sequelize db:seed --seed ../seeders/nombreFicheroSeederQueQueremos.js
```
	Ejemplo: sequelize db:seed --seed ../seeders/20220227001249-Pedido.js
	
DESHACER  SEEDER
sequelize db:seed:undo:all


GUARDAR ENCRIPTAR ALGO EN LA BBDD CON BCRYPT
1 instalar dependencia: 
	npm i bcrypt
2 en la carpeta CONFIG:
	crear archivo auth.js
	copiar dentro lo del ejemplo (y configurar si queremos)
	Lo que hace es dar los parámetros de encriptación al bcrypt
3 En el controller donde esté el método post donde meta en la BBDD el campo que queramos importar (suele ser un password):
	2.1 Arriba importamos la clase bcrypt:
		const bcrypt = require('bcrypt')
	2.2 y la clase authConfig
		const authConfig =  require('authconfig')
4 en el método donde metamos el campo a encriptar:
```
let password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
```


DESENCRIPTAR ALGO AL LEERLO DE LA BBDD
1 Asegurarnos que los Pasos 1, 2 y 3 de Encriptar están hechos
2 en el método donde vayamos a extraer el dato:
```
if (bcrypt.compareSync(password, Usuario.password))
```


SEGURIDAD PERMISOS JWT (JSON WEB TOKEN)
Cuando un usuario hace login correctamente, la app genera un token individual para darle permiso a ese usuario a ejecutar determinados endpoints.
1 npm i jsonwebtoken
2 Crear carpeta "middlewares"
3 dentro de la carpeta middlewares creamos auth.js (no tiene nada que ver con ../config/auth.js) que será el middleware que ejecutaremos antes de cada función controladora. Si la función de auth.js se ejecuta exitosamente, se ejecutará esa función controladora
4 Dentro del auth.js copiamos el código de ejemplo:
```
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
module.exports = (req, res, next) => {
    console.log(req.headers);
    // Comprobar que existe el token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: "Acceso no autorizado" });
    } else {
        // Comprobar la validez de este token
        let token = req.headers.authorization.split(" ")[1];
        // Comprobar la validez de este token
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err) {
                res.status(500).json({ msg: "Ha ocurrido un problema al decodificar el token", err });
            } else {
                req.user = decoded;
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

6 En el controller:
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

8 Ya nos dejará ejecutar los diferentes endpoints



CREAR DISTINTOS ROLES ROL DE USUARIO ADMIN USER ETC
1 En Usuario creamos un campo nuevo llamado por ejemplo "rol" (hay que añadirlo en model y en migration)
2 A la hora de crear un usuario, le damos un valor a ese campo. Podemos meter uno por defecto
	Ver Evernote "METER VALOR POR DEFECTO DEFAULT EN UN CAMPO BBDD"
3 Creamos un nuevo middleware por ejemplo isAdmin.js
4 Dentro de isAdmin.js
	4.1 Importamos ../models/index' y lo asignamos al modelo Usuario
```
const { Usuario } = require('../models/index');
```
	4.2 Creamos la función middleware metiendo dentro una función findOne que compruebe si el usuario que llega por body tiene el campo rol que queramos:
```
module.exports = (req, res, next) => {
    let id = req.body.id;
    Usuario.findOne({
        where : { id : id }
    }).then(usuarioEncontrado => {
        if(usuarioEncontrado.rol == 1){
            next();
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


PERMITIR QUE UN USUARIO PUEDA CAMBIAR SU PASSWORD
1 Creamos un endpoint nuevo: updatePassword
2 Añadimos la función controladora:
	UsuarioController.updatePassword = (req, res) => {
		let id = req.body.id;
		let oldPassword = req.body.oldPassword;
		
		Usuario.findOne({
		where : { id : id }
		}).then(usuarioFound => {
		
	}



VARIABLES .ENV ENTORNO SECRETAS
Son variables que usaremos en nuestro proyecto pero no queremos que se vean. Se suelen usar para meter los parámetros del ../config/auth.js
1 Creamos fichero .env en la raiz del proyecto
2 Instalamos el paquete: npm i dotenv
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



METER VALOR POR DEFECTO DEFAULT EN UN CAMPO BBDD
1 En migration, en el campo, le metemos un nuevo parámetro llamado
	"defaultValue: valor"
	Ejemplo:
```
rol: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
    }
```


IMPEDIR QUE UN CAMPO TENGA VALOR NULL
En migration, en el campo, le metemos allowNull: false


IMPEDIR QUE UN CAMPO SE REPITA (por ejemplo si intentan meten un email ya registrado en el endpoint registrarUsuario)
En la función controladora de registrar usuario, justo después de las declaraciones del body:
Lo que hacemos es meter el Usuario.create dentro de una función findOne para que antes busque si el email que le entra por del front ya está en la BBDD.
```
Usuario.findOne({ //Buscamos el email que metemos en el campo
    where: {email : email}  //Comparamos el campo email con la entrada email del front
}).then(elmnt => {  //Si el email...
    if(!elmnt) {//....no está registrado en la BBDD
        //Ejecuta el método Usuario.create
        // ********* aquí dentro se metería toda la función de Usuario.create()
    }else {
        res.send("Ese email ya está registrado, utiliza otro");
    }
});
```