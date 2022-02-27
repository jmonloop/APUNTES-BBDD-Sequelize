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
// router.delete('/', UsuariosController.borrarTodos);
router.delete('/', isAdmin, UsuariosController.borrarTodos);

//http://localhost:3000/usuarios/idUsuario (usando un DELETE)
//Recibe por URL/params un id de usuario y lo borra de la BBDD por ID solo si el usuario está logueado (auth)
router.delete('/:id', UsuariosController.borrarPorId);
// router.delete('/:id', auth, UsuariosController.borrarPorId);

//http://localhost:3000/usuarios/profile/idUsuario (usando un PUT)
//Recibe por URL/params un id de usuario y modifica su perfil solo si el usuario está logueado (auth)
router.put('/profile/:id', auth, UsuariosController.modificarUsuario);

//http://localhost:3000/usuarios/newpassword (usando un PUT)
//Recibe por body en formato json el id de un usuario, el password actual y el password nuevo para cambiar el password del usuario solo si el usuario está logueado (auth)
router.put('/newpassword', auth, UsuariosController.updatePassword);

//http://localhost:3000/usuarios/custom/terminoABuscar (usando un GET)
//Recibo por body en formato json los datos de usuario de mi BBDD buscándolo por un término usando params
router.get('/custom/:termino', UsuariosController.buscaTermino)




//Exporto router para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = router;