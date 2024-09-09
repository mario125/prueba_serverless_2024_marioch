const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); 

const app = express();
const swaggerDocument = YAML.load('./swagger.yaml'); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
