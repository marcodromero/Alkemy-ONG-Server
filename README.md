# 💻 Proyecto ONG - Backend 🚀

## ⚙️ Configuración del Entorno

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### 1. Prerrequisitos 🛠️

Asegúrate de tener instalado lo siguiente:

Node.js (se recomienda la versión LTS)
https://nodejs.org/es/download

XAMPP para la base de datos MySQL.
https://www.apachefriends.org/es/index.html

### 2. Configuración de la Base de Datos con XAMPP

Instala XAMPP (si aún no lo has hecho).

Abre el Panel de Control de XAMPP.

Inicia el módulo MySQL. (Sugerencia: Puedes incluir aquí una captura del Panel de Control de XAMPP con MySQL iniciado).

### 3. Instalación de Dependencias

Utilizando una consola de comandos
Clona el repositorio:

`git clone https://github.com/marcodromero/Alkemy-ONG-Server.git`

`cd server-base-proyecto-ong`

Instala todas las dependencias del proyecto:
`npm install`

### 4. Configuración de Variables de Entorno

Copia el archivo de ejemplo:
cp .env.example .env

Edita el nuevo archivo .env y completa las credenciales de tu base de datos (por defecto, XAMPP usa root sin contraseña) y otras variables.

### 5. Base de Datos: Migraciones y Seeders 💾

Crea la base de datos (el nombre debe coincidir con DB_NAME en tu archivo .env).
http://localhost/phpmyadmin

🚨 En la opcion 'variables' y edita el valor max_allowed_packed a 104857600 (sino habra un error al volcar los datos de prueba a las tablas)

Ejecuta las migraciones para crear las tablas:
`npx sequelize-cli db:migrate`

Ejecuta los seeders para cargar datos iniciales de prueba:
`npx sequelize-cli db:seed:all`

### ▶️ Ejecución del Proyecto

Para iniciar el servidor localmente, ejecuta el siguiente comando:
`npm run start`

El servidor estará disponible en http://localhost:5000