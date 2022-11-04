const express = require('express');
const userService = require('./../services/userService');
const service = new userService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const usuarios = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estos son los usuarios encontrados',
            'data': usuarios
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const user = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': user
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idUser', async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await service.findOneDB(idUser);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': user
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idUser', async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idUser, body);
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
router.delete('/:idUser', async (req, res, next) => {
    try {
        const { idUser } = req.params;
        const user = await service.deleteDB(idUser);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': user
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Email and Password
router.post('/login', async (req, res, next) => {
    try {
        const body = req.body;
        const user = await service.findByEmailAndPassword(body);
        res.json({
            'success': true,
            'message': 'Concidencia encontrada',
            'data': user
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;