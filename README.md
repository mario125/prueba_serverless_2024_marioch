# PRUEBA TECNICA MARIO SERVERLESS

## Descripción

Este proyecto es una aplicación serverless utilizando AWS Lambda y Serverless Framework. Está escrito en TypeScript y utiliza varias dependencias para facilitar el desarrollo y la implementación.
### Características principales:
- Despliegue de funciones Lambda en AWS utilizando Serverless Framework.
- Soporte para TypeScript.
- Esbuild para empaquetar el código eficientemente.
- Documentación de API con Swagger.
- Pruebas unitarias utilizando Jest.
- Simulación local de AWS Lambda con Serverless Offline.



## Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18.x o superior).
- NPM o Yarn.
- AWS CLI configurado con credenciales válidas.
- Serverless Framework instalado globalmente.

### Pasos para instalar

1. Clonar el repositorio:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
  
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Crear un archivo `.env` basado en el `.env.example` con las variables de entorno necesarias.

4. Iniciar el servidor localmente:

    ```bash
    npm run dev
    ```

## Comandos

| Comando           | Función                                                                 |
|-------------------|-------------------------------------------------------------------------|
| `npm run swagger` | Genera/actualiza la documentación de la API con Swagger.                |
| `npm run dev`     | Inicia el entorno de desarrollo local con Serverless Framework.          |
| `npm run deploy`  | Despliega la aplicación en AWS (entorno dev).                           |
| `npm run remove`  | Elimina los recursos desplegados en AWS (entorno dev, región us-east-1). |
| `npm run test`    | Ejecuta las pruebas unitarias con Jest.                                 |

### Endpoints

| Método | URL                                                                                      | Body                  |
|--------|-------------------------------------------------------------------------------------------|-----------------------|
| GET    | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getUserAll                     | N/A                   |
| POST   | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getUserId                      | { "id": 1 }           |
| GET    | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getSwapiPeopleAll              | N/A                   |
| POST   | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getSwapiPeopleId               |  { "id": 1 }                   |
| GET    | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getSwapiPeopleAll              | N/A                   |
| POST   | https://99zox9pbpi.execute-api.us-east-1.amazonaws.com/dev/getSwapiPeopleId               |  { "id": 1 }1                  |
| POST   | https://k6jiva8trk.execute-api.us-east-1.amazonaws.com/register                           | { "nombre": "PEPE", "correo_electronico": "jmuspeda3ed@gmail.com", "contrasena": "Mario125@Lima", "fecha_creacion": "2024-02-26 00:15:07"}                  |


### Endpoints disponibles

| Método | Ruta                      | Descripción                              |
|--------|----------------------------|------------------------------------------|
| POST   | `/register`                | Registra un nuevo usuario.               |
| GET    | `/getUserAll`              | Obtiene todos los usuarios.              |
| POST   | `/getUserId`               | Obtiene un usuario por ID.               |
| GET    | `/getSwapiPeopleAll`       | Obtiene todos los personajes de SWAPI.   |
| POST   | `/getSwapiPeopleId`        | Obtiene un personaje de SWAPI por ID.    |

### DevDependencies

- `@types/aws-lambda`: Tipos para AWS Lambda.
- `@types/jest`: Tipos para Jest.
- `esbuild`: Empaquetador y minificador.
- `express`: Framework web.
- `jest`: Framework de pruebas.
- `serverless`: Framework para aplicaciones serverless.
- `serverless-esbuild`: Plugin de Serverless para esbuild.
- `serverless-plugin-typescript`: Plugin de Serverless para TypeScript.
- `ts-jest`: Preprocesador de TypeScript para Jest.
- `ts-node`: Ejecutor de TypeScript.
- `typescript`: Lenguaje de programación.

### Dependencies

- `axios`: Cliente HTTP.
- `dotenv`: Carga variables de entorno.
- `mysql2`: Cliente MySQL.
- `path`: Utilidades de rutas.
- `sequelize`: ORM para Node.js.
- `serverless-offline`: Plugin de Serverless para desarrollo offline.
- `swagger-ui-express`: Middleware para Swagger UI.
- `yamljs`: Parser de YAML.
- `zod`: Librería de validación.



