const express = require('express');
const ComentariosService = require('./../services/comentariosService');
const service = new ComentariosService();

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { size } = req.query;
        const comentarios = await service.findAll(size || 100);
        res.json({
            'success': true,
            'message': 'Estos son los comentarios encontrados',
            'data': comentarios
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Create new
router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const comentario = await service.createDB(body);
        res.json({
            'success': true,
            'message': 'Se ha creado con éxito',
            'data': comentario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by ID
router.get('/:idComentario', async (req, res, next) => {
    try {
        const { idComentario } = req.params;
        const comentario = await service.findOneDB(idComentario);
        res.json({
            'success': true,
            'message': 'Se ha encontrado',
            'data': comentario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Update
router.patch('/:idComentario', async (req, res, next) => {
    try {
        const { idComentario } = req.params;
        const body = req.body;
        const { old, changed } = await service.updateDB(idComentario, body);
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
router.delete('/:idComentario', async (req, res, next) => {
    try {
        const { idComentario } = req.params;
        const comentario = await service.deleteDB(idComentario);
        res.json({
            'success': true,
            'message': 'Se ha eliminado con éxito',
            'data': comentario
        });
    } catch (error) {
        next(error);
    }
});

///////////////////////// Get by Reporte
router.get('/reportes/:idReporte', async (req, res, next) => {
    try {
        const { idReporte } = req.params;
        const comentarios = await service.findComentarioByReporte(idReporte);
        res.json({
            'success': true,
            'message': 'Comentarios encontrados',
            'data': comentarios
        });
    } catch (error) {
        next(error);
    }
});


module.exports = router;