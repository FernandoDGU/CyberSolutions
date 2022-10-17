const express = require('express');
const inventarioService = require('./../services/inventarioService');
const service = new inventarioService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const inventarios = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estos son los inventarios encontrados',
            'data': inventarios
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const inventario = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': inventario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idInventario', async (req, res, next) => {
    try {
        const { idInventario } = req.params;
        const inventario = await service.findOneDB(idInventario);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': inventario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idInventario', async (req, res, next) => {
    try {
        const { idInventario } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idInventario, body);
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
router.delete('/:idInventario', async (req, res, next) => {
    try {
        const { idInventario } = req.params;
        const inventario = await service.deleteDB(idInventario);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': inventario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Sucursal
router.get('/sucursal/:idSucursal', async (req, res, next) => {
    try {
        const { idSucursal } = req.params;
        const inventarios = await service.findInventarioBySucursal(idSucursal);
        res.json({
            'success': true,
            'message': 'Inventarios encontrados',
            'data': inventarios
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;