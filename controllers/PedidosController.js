//Importo el modelo Pedido desestructurado (en formato objeto) para poder escribir en la tabla Pedido de la BBDD
const { Pedido } = require('../models/index');
//Declaro el objeto UsuariosController (siempre igual para cada controller)
const PedidosController = {};

//MÉTODO POST PARA HACER UN PEDIDO NUEVO POR BODY
PedidosController.creaPorBody = (req,res) => {
    //Capturo el body
    let body = req.body;

    //Creo un nuevo elemento Pedido con los datos que llegan por body
    Pedido.create({
        peliculaId: body.peliculaId,
        usuarioId: body.usuarioId,
        precio: body.precio,
        fechaSalida: body.fechaSalida,
        fechaDevolucion: body.fechaDevolucion


        // {
        //     "id": 256, 
        //     "peliculaId": 60599,
        //     "usuarioId": 206,
        //     "precio": 3,
        //     "fechaSalida": "2022-02-26",
        //     "fechaDevolucion": "2022-03-10"
        // }

    })
    .then(pedido => {
        //Si se cumple la promesa..
        if(pedido){
            //Genero un mensaje
            let mensaje = "Se ha creado un pedido con las siguientes características:"
            //Envío por postman el mensaje y los datos de pedido
            res.json({
                mensaje,
                pedido
            })
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

//MÉTODO POST PARA HACER UN PEDIDO NUEVO USANDO QUERY
PedidosController.creaPorQuery = (req,res) => {
    //Capturo las variables que llegan por query, es decir por la URL
    let peliculaId = req.query.peliculaId;
    let usuarioId = req.query.usuarioId;
    let precio = req.query.precio;
    let fechaSalida = req.query.fechaSalida;
    let fechaDevolucion = req.query.fechaDevolucion;

    //Creo un nuevo elemento Pedido con las variables
    Pedido.create({
        peliculaId: peliculaId,
        usuarioId: usuarioId,
        precio: precio,
        fechaSalida: fechaSalida,
        fechaDevolucion: fechaDevolucion
    })
    .then(pedido => {
        //Si se cumple la promesa..
        if(pedido){
            //Genero un mensaje
            let mensaje = "Se ha creado un pedido con las siguientes características:"
            //Envío por postman el mensaje y los datos de pedido
            res.json({
                mensaje,
                pedido
            })
        }else{
            res.send("La creación de un nuevo pedido ha fallado");
        }
    })
    .catch((error => {
        res.send(error)
    }))
}

//MÉTODO GET PARA TRAER UN INFORME COMPLETO DE PEDIDOS
PedidosController.informeCompleto = async (req,res) => {
    //Escribimos la consulta en formato SQL.
    let consulta = 
    `SELECT pedidos.id AS NumeroPedido, pedidos.precio AS precio, usuarios.name AS nombreUsuario, usuarios.email AS emailUsuario, peliculas.title AS tituloPelicula, pedidos.fechaSalida AS fechaSalida
    FROM usuarios 
    INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId
    INNER JOIN peliculas ON peliculas.id = pedidos.peliculaId 
    ORDER BY fechaSalida ASC`;




    //El resultado viene de una función asincrona de sequelize llamada query que sirve para realizar consultas en crudo, en vez de usar métodos propios de sequelize como el findAll o los condiciones Op.or
    let resultado = await Pedido.sequelize.query(consulta,{
        //Esta línea es para que no devuelva resultados duplicados
        type: Pedido.sequelize.QueryTypes.SELECT});

    if(resultado){
        res.send(resultado);
    }

}

//MÉTODO GET PARA TRAER UN INFORME DE PEDIDOS POR USUARIO USANDO PARAMS
PedidosController.informePorUsuario = async (req,res) => {
    let usuario = req.params.usuario
    //Escribimos la consulta en formato SQL.
    let consulta = 
    `SELECT usuarios.name AS nombre, peliculas.title AS titulo , pedidos.fechaDevolucion AS fechaDevolucion, usuarios.nickname AS nickname, usuarios.email AS correo
    FROM usuarios 
    INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId
    INNER JOIN peliculas ON peliculas.id = pedidos.peliculaId 
    WHERE name LIKE '%${usuario}%'`;

    /////////////////// EXPLICACIÓN DE LA CONSULTA SQL \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //Esta línea describe qué atributo queremos y qué nombre va a tener en el informe
    // SELECT usuarios.name AS nombre, peliculas.title AS titulo , pedidos.fechaDevolucion AS fechaDevolucion, usuarios.nickname AS nickname, usuarios.email AS correo
    
    // En esta que vamos a juntar la tabla "usuarios" (siempre empezar por una tabla master)...
    // FROM usuarios 

    //...con la tabla "pedidos" (tabla esclava) mediante estas pk/fk
    // INNER JOIN pedidos ON usuarios.id = pedidos.usuarioId

    //... y con la tabla "peliculas (la otra tabla master) mediante estas pk/fk
    // INNER JOIN peliculas ON peliculas.id = orders.peliculaId 

    //...que el atributo nombre coincida con la variable usuario
    // WHERE name LIKE '%${usuario}%' 


    //El resultado viene de una función asincrona de sequelize llamada query que sirve para realizar consultas en crudo, en vez de usar métodos propios de sequelize como el findAll o los condiciones Op.or
    let resultado = await Pedido.sequelize.query(consulta,{
        //Esta línea es para que no devuelva resultados duplicados
        type: Pedido.sequelize.QueryTypes.SELECT});

    if(resultado){
        res.send(resultado);
    }

}

//MÉTODO DELETE PARA BORRAR UN PEDIDO POR ID USANDO PARAMS
PedidosController.borraPorId = async (req, res) => {
    let id = req.params.id

    //Busco el pedido en mi BBDD
    try {
        Pedido.findOne({
            where : {id : id}
            //Se resuelve la promesa de sequelize
        }).then(elmnt => {
            //Si devuelve un valor que no sea null...
            if(elmnt != null) {
                //..almaceno el valor para mostrarlo después de borrarlo
                let pedidoBorrado = elmnt
                //..borro el elemento de la BBDD
                Pedido.destroy({
                    where : { id : id },
                    truncate : false
                    //Una vez se cumple la promesa de borrarlo...
                }).then(x => {
                    //Muestro mensaje con el nombre del usuario que se ha borrado
                    res.send(`Se ha eliminado el pedido nº ${pedidoBorrado.dataValues.id}`)
                })
                //Si devuelve null quiere decir que no existen usuarios con esa id
            } else {
                res.send('No existe ningún pedido con esa id en tu base de datos')
            }
        })

    } catch (error) {
        res.send(error);
    };
}

//Exporto PedidosController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PedidosController;