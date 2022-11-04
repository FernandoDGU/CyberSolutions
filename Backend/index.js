const express = require("express");
const cors = require('cors');
const db = require('./models/connection');
const { DBCONNECTION } = require('./consts.json');
const routerApi = require('./routes');
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler');


const app = express();
const port = 5000;
app.use(cors());

db(DBCONNECTION);

app.use(express.json());
routerApi(app); //Rutas de las entidades
//Menjo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () =>{
    console.log("Escuchando al puerto: " + port);
})