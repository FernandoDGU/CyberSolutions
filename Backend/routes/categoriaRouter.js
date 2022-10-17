const express = require('express');
const CategoriaService = require('./../services/categoriaService');
const service = new CategoriaService();

const router = express.Router();

///////////////////////// GET ALL
router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const categories = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estos son las categorías encontradas',
            'data': categories
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const category = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': category
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idCategory', async (req, res, next) => {
    try {
        const { idCategory } = req.params;
        const category = await service.findOneDB(idCategory);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': category
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idCategory', async (req, res, next) => {
    try {
        const { idCategory } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idCategory, body);
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
router.delete('/:idCategory', async (req, res, next) => {
    try {
        const { idCategory } = req.params;
        const category = await service.deleteDB(idCategory);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': category
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;