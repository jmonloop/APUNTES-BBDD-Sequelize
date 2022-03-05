//Importo la clase axios para poder hacer llamadas a otros endpoints
const axios = require("axios");
//Importo el modelo Pelicula desestructurado (en formato objeto) para poder escribir en la tabla Pelicula de la BBDD
const { Pelicula } = require('../models/index')
//Declaro la API_KEY necesaria para ejecutar endpoints en TMDB
const API_KEY = "210d6a5dd3f16419ce349c9f1b200d6d";
//Declaro función para obtener número random entre dos límites
const minMaxRoundedRandom = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}


//En esta forma, lo que generamos es una clase PeliculaClass (con constructor vacío) donde meteremos todos los métodos que hacen de función controladora.

//Las principales diferencias respecto al método que hemos usado en UsuariosController es que de esta forma hemos de meter los parámetros de entrada (req.query, req.params o req.body) en la declaración del endpoint (en el xxxRouter).
//La otra diferencia es que en la función controladora, al ser un método, en vez de devolver resultados por res.send, los devolvemos con return.
class PeliculaClass {
    constructor(){

    };

    //Clono 500 películas aleatorias de TMDB adaptando los campos a los de mi BBDD
    clona = async () => {
        //Variable para añadir a la imagen de TMDB y guardarla en nuestra BBDD
        let TMDBimgUrlRoot = "https://image.tmdb.org/t/p/original";
        //Lanzo axios una vez para capturar la cantidad de páginas total que voy a tener que recorrer
        let firstScan = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        // Guardo el total de páginas que necesito recorrer (no se usa porque TMDB te limita a 10k películas)
        let numbOfPagesTMDB = firstScan.data.total_pages
        let numbOfFilmsTMDB = firstScan.data.total_results

        //Si quisiéramos clonar TODA TMDB habría que meter el valor en j<valor. Para este proyecto he preferido clonar solo 25 páginas para no demorar mucho la práctica.
        for(let j=1 ; j<=25 ; j++) {
            //Hago la llamada al endpoint de TMDB interpolando la función random donde va el número de página y así no traernos siempre los resultados en el mismo orden
            let resultados = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${minMaxRoundedRandom(1, 25)}&with_watch_monetization_types=flatrate`);
        
            //Variable para saber los resultados por página
            let numbOfResultsPerPageTMDB = resultados.data.results.length
            //Recorro los resultados de la página guardando los campos que me interesan en mi BBDD..
            for(let i=0; i<numbOfResultsPerPageTMDB ; i++) {
                Pelicula.create({
                    //..guardando en cada atributo los datos que llegan por body
                    title : resultados.data.results[i].original_title,
                    synopsis : resultados.data.results[i].overview,
                    adult : resultados.data.results[i].adult,
                    popularity : resultados.data.results[i].popularity,
                    image : (TMDBimgUrlRoot + "/" + resultados.data.results[i].poster_path)
                })
            }
        }

        return (`Se han clonado exitosamente ${25} páginas, con un total de ${500} peliculas`)
    };

    //Registro pelicula con los parámetros que llegan por body
    registra = async (title, synopsis, adult, popularity, image) => {
        //Hago findAll de la película
        return (
            Pelicula.findAll({
            //Donde el atributo title se compara con el title que llega por body
            where : {title : title}
            
                //Si la promesa se cumple
            }).then(peliculaRepetida => {
                //Si no la encuentra (array vacío)...
                if(peliculaRepetida == 0) {
                    //Crea un elemento nuevo en la tabla Pelicula
                    return Pelicula.create({
                        //guardando en cada atributo los datos que llegan por body
                        title : title,
                        synopsis : synopsis,
                        adult : adult,
                        popularity : popularity,
                        image : image
                    }).then(pelicula => {
                        //Y envío un mensaje de confirmación
                        return (`La pelicula ${pelicula.dataValues.title}, ha sido registrada correctamente`);
                    }).catch((error) => {
                        return (error);
                    });
                    
                    
                //Si la encuentra...
                }else {
                    //Envío mensaje de que ya existe en la BBDD
                    return (`La pelicula ${peliculaRepetida[0].title}, ya está registrada en la base de datos`);
                }
            })
        )

    // // {
    // //     "title": "El silencio de los corderos",
    // //     "synopsis": "Un tío muy carismático que come personas",
    // //     "adult" : true,
    // //     "popularity": 7.3,
    // //     "image": "stringIMAGE"
    // // }

    };

    //Borro todas las películas de mi BBDD
    borraTodas = async () => {
        return ( 
            Pelicula.destroy({
            where : {}, //No se especifica ningún elemento ya que queremos borrarlos todos
            truncate : false //Resetea todas las pk
            }).then (elmnt => {
                return  (`Se han eliminado ${elmnt} peliculas`)
            })    
        )
    };

    //Busco y muestro pelicula de TMDB por título usando query
    APItraePorTitulo = async (titulo) => {
        //Hago la llamada al endpoint de TMDB interpolando la API_KEY y el valor de búsqueda.
        let resultados = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${titulo}&page=1&include_adult=false`);

        return(resultados.data);

    };

    //Muestro 5 primeras páginas de las películas más valoradas de TMDB
    APItopRated = async () => {
        //Declaro array vacío que es donde guardaremos el json con el listado de películas
        const ratedArr = [];

        //Creamos un bucle for e iteramos el valor de page para que nos saque las 5 primeras páginas de rated
        for(let i=1 ; i<6 ; i++){
            //llamada por axios al endpoint de TMDB interpolando la API_KEY
            let results = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${i}`);
            ratedArr.push(results.data)
        }
        
        //Muestro el array de páginas generado
        return (ratedArr);
    };

    //Muestro el número total de películas registradas en nuestra BBDD
    muestraCantidad = async () => {
        //declaro el string que forma la consulta de SQL
        let consulta = `SELECT COUNT(*) FROM peliculas;`;

        //genero el método de sequelize para hacer a consulta SQL en crudo
        let resultado = await Pelicula.sequelize.query(consulta,{
            //Esta línea es para que no devuelva resultados duplicados
            type: Pelicula.sequelize.QueryTypes.SELECT});

        //Si obtengo respuesta de la consulta..
        if(resultado){
            //..accedo al valor para saber el total de elementos
            let valor = resultado[0]['COUNT(*)']
            if(valor > 0) {
                return (`Hay un total de ${valor} peliculas registradas en la base de datos`);
            }else {
                return(`No hay niguna pelicula registrada en la base de datos`)
            };
        };
    };

    //Busco y muestro películas de nuestra BBDD con palabra coincidente usando query
    buscaPorTermino = async (termino) => {

        //declaro el string que forma la consulta de SQL
        let consulta = 
            `SELECT * FROM peliculas
            WHERE title LIKE '%${termino}%'
            OR synopsis LIKE '%${termino}%'`;

        //genero el método de sequelize para hacer a consulta SQL en crudo
        let resultado = await Pelicula.sequelize.query(consulta,{
            //Esta línea es para que no devuelva resultados duplicados
            type: Pelicula.sequelize.QueryTypes.SELECT});

        //Si la consulta devuelve algún resultado..
        if(resultado != 0){
            //..muestro los resultados obtenidos
            console.log(resultado)
           return resultado
        }else {
            return (`El término ${termino} no se encuentra en tu base de datos de películas`)
        }

    };

    //Busco y muestro película de TMDB por id usando params
    APItraePorId = async (id) => {
        //Hago llamada al endpoint de TMDB interpolando el id que nos llega por params
        let results = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)

        return results.data
    };

}








let PeliculasController = new PeliculaClass();

//Exporto PeliculasController para que pueda ser importado desde otros ficheros una vez ha ejecutado la lógica de éste(siempre igual)
module.exports = PeliculasController;