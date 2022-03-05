HEROKU

1 Hacer login en Heroku y en el panel principal, a la derecha le damos a New

2 Dar nombre a la app sin mayúsculas ni espacios

3 Elegir región (europa pero da igual)

4 Vincular con Github, buscar el repo y darle a Connect

5 Elegir la rama de deployeo automático y darle a EnableAutomaticDeploys para que actualice el deploy automáticamente

6  Elegir la rama de deployeo manual por si queremos hacerlo manualmente dándole a DeployBranch

7 Podemos ver logs a tiempo real en More + View Logs

8 Añadir Base de datos para MySQL:

	Resources + Addons + buscamos  ClearDB MySQL
		Elegimos la versión Ignite (la gratis)
		(si es la primera vez nos pedirá confirmar metiendo nuestra tarjeta de crédito pero es gratis)
9 Settings

10 Reveal Config Vars

11 Copiamos la cadena de conexión
	Ejemplo: 
```
'mysql://b0600ea495asds:9cd2b111@us-cdbr-hirone-west-06.cleardb.net/heroku_4a1dc3673c4114d?reconnect=true'
```
	Desglosamos las variables. (Siguiendo el ejemplo:)
		USER NAME = b0600ea495asds
		PASSWORD = 9cd2b111
		HOST = us-cdbr-hirone-west- 06.cleardb.net
		DATABASE NAME = heroku_4a1dc3673c4114d
		
12 Creamos una nueva conexión en MySQL metiendo en cada campo las variables desglosadas de la cadena de conexión:

	Connection Name --> el nombre que queramos
	Hostname --> HOST
	Port --> el que viene por defecto (3306)
	Username --> USER NAME
	Password + StoreInVault.. --> PASSWORD
	Defautl Schema --> DATABASE NAME
	
13 Vamos a nuestro proyecto backend y en el  fichero .env añadimos variables de entorno ya que heroku usa algunas como NODE_ENV para elegir el entorno para deployear (qué entorno elige del config.json)

	13.1 ENVs para enlazar con la nueva BBDD remota (mediante las variables desglosadas)
```
#config/config.js
DB_USERNAME="b0600ea495asds"
DB_PASSWORD="9cd2b111"
DB_DATABASE="heroku_4a1dc3673c4114d"
DB_HOST="us-cdbr-hirone-west- 06.cleardb.net"
```
	13.2 ENVs para asignar el puerto en local cuando queramos trabajar en local:
```
#db.js
DB_PORT="3306"
```
	13.3 ENVs para seleccionar el entorno del config.js (development, test o production):
```
#models/index.js
NODE_ENV="production"
```

14 Cambiamos la extensión del config/config.json por config.js y también lo modificamos en todas las llamadas de nuestro proyecto

15 Copiamos dentro de config/config.js el código:
```
//Importo las variables del fichero .env
require('dotenv').conf

//Exporto
module.exports = {
//Añado en paralelo constantes para poder trabajar en local si no tengo las variables de entorno
  "development" : {
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
  //Este será el entorno con el que trabajará Heroku
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}
```
Como la variable de entorno NODE_ENV le hemos dado valor "production", Heroku siempre deployeará siguiendo lo que haya en la rama "production". En development asignamos en paralelo constantes en vez de .env para que puedan trabajar en local cuando se bajen nuestro repo.

16 En Heroku + Settings + Reveal Config Vars

	Introducimos manualmente clave y valor de todas las variables declaradas en nuestro fichero .env (paso 13)

17 En el package.json, añadimos el script
"start": "node index.js"

15 En index.js, cambiamos la línea donde se declara el número de puerto para el backend
	de 
```
const PORT = 5000;
```
	a
```
const PORT = process.env.PORT || 5000;
```
	De esta forma Heroku podrá asignar su propio puerto para deployar la app. 
	OJO! esta env no se debe meter manualmente en la web de Heroku ya que es una que asigna él automáticamente.

16 En root, creo fichero Procfile y dentro pego:

	web: node index.js
	
17 Para saber la dirección raíz de los endpoint, 
	en Heroku, elegimos la app + settings y abajo del todo en

	Your app can be found at 

copiamos la url

18 OPCIONAL

Si en nuestro proyecto hacemos alguna llamada a nombre de la BBDD (por ejemplo usando algún raw query) hay que tener en cuenta que al deployear cambiará el nombre de la BBDD (ahora apuntará a la que haya en DB_DATABASE). 
Si no se sustituye por el nuevo nombre que nos da Heroku, esos endpoints no funcionarán y lo que es peor, Heroku se nos tumbará a partir de esa petición y tendremos que re-arrancarlo.

Ejemplo:

        //declaro el string que forma la consulta de SQL
        let consulta = 
            `SELECT * FROM videoclub.peliculas
            WHERE title LIKE '%${termino}%'
            OR synopsis LIKE '%${termino}%'`;

En nuestro ejemplo ahora debería ser:

	    //declaro el string que forma la consulta de SQL
        let consulta = 
            `SELECT * FROM heroku_4a1dc3673c4114d.peliculas
            WHERE title LIKE '%${termino}%'
            OR synopsis LIKE '%${termino}%'`;





VER VARIABLES DE ENTORNO QUE USA HEROKU EN NUESTRA APP
Muchos de los fallos que da Heroku tienen que ver con alguna ENV que el deploy necesita y que no tiene. Para ver exactamente cuáles está recibiendo Heroku, en el terminal escribimos:

1º

	heroku login

2º

	heroku run printenv -a nombreapp





BLOGS CON INFO DE DEPLOY CON NODEJS Y MYSQL EN HEROKU

https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/

https://dev.to/lawrence_eagles/causes-of-heroku-h10-app-crashed-error-and-how-to-solve-them-3jnl#:~:text=If%20your%20Procfile%20is%20pointing,App%20crashed%20error%20code%20message.