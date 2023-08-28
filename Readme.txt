I. Versiones a tener en cuenta

"NodeJS": "16.16.0"
"express": "^4.18.2",
"morgan": "^1.10.0",
"node-fetch": "^2.6.1",
"nodemon": "^3.0.1",
"underscore": "^1.13.6"

II. Comando importante 

1. No se puede utilizar una versión superior de node fetch

npm i node-fetch@2.6.1

2. Para ejecuntar el servidor se esta utilizando nodemon para lo cual se configuro un script que ayuda a inicializar el servidor

npm run dev

III. Importar desde GitHub

1. Tener instalado GitBash en el ordenador.
2. Ubicarse en donde se desea importar el proyecto WEB.
3. Abrir GitBash.
4. Ir al repositorio y copiar la URL del repositorio para poderlo clonar en la pestaña 
Code
Clone
HTTPS
5. Escribir el siguiente comando en GitBash

git clone URL copiada en el punto 4

6.	Abrir Visual Studio Code.
7.	Abrir el proyecto recién importado para ello debemos seleccionar:
File
Open Folder
Seleccionamos la carpeta recién clonada
Dar en el botón “Seleccionar carpeta”
8.	Es recomendable ya tener instalado node.JS en el ordenador y el nodemon.
9.	Ejecutamos el servidor con el comando

Npm run dev

10. Consumir el servicio de una página WEB o desde Postman por medio de la URL

http://localhost:3000/resumen/2019-12-01?dias=5
