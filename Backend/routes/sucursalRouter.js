const express = require('express');
const sucursalService = require('./../services/sucursalService');
const service = new sucursalService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const sucursales = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estas son las sucursales encontradas',
            'data': sucursales
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const sucursal = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': sucursal
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idSucursal', async (req, res, next) => {
    try {
        const { idSucursal } = req.params;
        const sucursal = await service.findOneDB(idSucursal);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': sucursal
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idSucursal', async (req, res, next) => {
    try {
        const { idSucursal } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idSucursal, body);
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
router.delete('/:idSucursal', async (req, res, next) => {
    try {
        const { idSucursal } = req.params;
        const sucursal = await service.deleteDB(idSucursal);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': sucursal
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;