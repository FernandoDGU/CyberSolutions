const express = require('express');
const reportesService = require('./../services/reportesService');
const service = new reportesService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const reportes = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estos son los reportes encontrados',
            'data': reportes
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const reporte = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': reporte
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idReporte', async (req, res, next) => {
    try {
        const { idReporte } = req.params;
        const reporte = await service.findOneDB(idReporte);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': reporte
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idReporte', async (req, res, next) => {
    try {
        const { idReporte } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idReporte, body);
        res.json({
            'success': true,
            'message': 'Se ha actualizado con éxito',
            'data': {
                "original": old,
                "Modificado": changed
            }
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Delete
router.delete('/:idReporte', async (req, res, next) => {
    try {
        const { idReporte } = req.params;
        const reporte = await service.deleteDB(idReporte);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': reporte
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Sucursal
router.get('/sucursal/:idSucursal', async (req, res, next) => {
    try {
        const { idSucursal } = req.params;
        const reportes = await service.findReporteBySucursal(idSucursal);
        res.json({
            'success': true,
            'message': 'Reportes encontrados',
            'data': reportes
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Sucursal and State
router.post('/state', async (req, res, next) => {
    try {
        const body = req.body;
        const reportes = await service.findBySucursalAndState(body);
        res.json({
            'success': true,
            'message': 'Reportes encontrados',
            'data': reportes
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Rango de fecha
router.post('/rango', async (req, res, next) => {
    try {
        const body = req.body;
        const reportes = await service.findByRangoFecha(body);
        res.json({
            'success': true,
            'message': 'Reportes encontrados',
            'data': reportes
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;