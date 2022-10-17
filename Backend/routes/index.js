const express = require('express');
const categoriaRouter = require('./categoriaRouter');
const comentariosRouter = require('./comentariosRouter');
const inventarioRouter = require('./inventarioRouter');
const reportesRouter = require('./reportesRouter');
const sucursalRouter = require('./sucursalRouter');
const userRouter = require('./userRouter');

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.use('/categoria', categoriaRouter);
    router.use('/comentario', comentariosRouter);
    router.use('/inventario', inventarioRouter);
    router.use('/reporte', reportesRouter);
    router.use('/sucursal', sucursalRouter);
    router.use('/user', userRouter);
}


module.exports = routerApi;