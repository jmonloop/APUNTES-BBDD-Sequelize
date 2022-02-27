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
        res.send(`Introduce un id de usuario con rol admin`)
    })

};