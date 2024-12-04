const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const areaRouter = require('./routes/areaRouter');
const empleadoRouter = require('./routes/empleadoRouter'); 
const encargadoRouter = require('./routes/encargadoRouter'); 
const departamentoRouter = require('./routes/departamentoRouter'); 
const errorHandler = require('./middlewares/errorHandler'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Conexión a la base de datos
mongoose.connect(
    'mongodb+srv://Lobo-Solitario2:pgiiaNBaP2mlLEoE@clustertoward2.w3hhg.mongodb.net/?retryWrites=true&w=majority&appName=ClusterToward2'
)
.then(() => console.log('Conexión a MongoDB Exitosa'))
.catch(err => console.error('Error al conectar a MongoDB', err));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/areas', areaRouter);
app.use('/api/empleados', empleadoRouter); 
app.use('/api/encargados', encargadoRouter); 
app.use('/api/departamentos', departamentoRouter); 

// Manejador de errores
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});