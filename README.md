# Proyecto ONG - Server

¿Como probarlo en tu computadora?
Requisitos previos:
Tener instalado Nodejs en la pc, Xampp.
https://nodejs.org/es
https://www.apachefriends.org/es/index.html

1) Ejecutar Xampp y poner a funcionar las opciones Apache y Mysql.
2) En el navegador ir a la url http://localhost/phpmyadmin y crear una base de datos con el nombre'ong'
2) Ir a la opcion 'variables' y editar el valor max_allowed_packed a 104857600 (sino habra un error al volcar los datos de prueba a las tablas)
3) Abrir el proyecto en el editor y desde ahi copiar .env.example y cambiar el nombre a .env.
4) Abrir la consola dentro del proyecto y ejecutar el siguiente comando para que se instalen las dependencias:

``` bash
npm install
 ```

5) Abrir la consola dentro del proyecto y ejecutar los siguientes comandos:

``` bash
npx sequelize-cli db:migrate
 ```

``` bash
 npx sequelize-cli db:seed:all
```

6) Poner a funcionar el servidor con el siguiente comando en la consola:

``` bash
 npm run start
```

* Credenciales 

Usuario admin de prueba
marco@mail.com
12345678

Usuario normal
registrandose