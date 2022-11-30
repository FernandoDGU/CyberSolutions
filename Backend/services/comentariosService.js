const ComentariosModel = require('./../models/comentariosSchema');
const boom = require('@hapi/boom');

class ComentariosService {

  async findAll(limit) {
    let comentariosDB = await ComentariosModel.find();

    if (!comentariosDB || comentariosDB.length < 1)
      throw boom.notFound('No hay comentarios registradas');

    comentariosDB = limit ? comentariosDB.filter((item, index) => item && index < limit) : comentariosDB;
    return comentariosDB;
  }

  async createDB(data) {
    const model = new ComentariosModel(data);
    await (await model.save()).populate('_user');
    return model;
  }

  async findOneDB(id) {
    try {

      const comentario = await ComentariosModel.findOne({
        _id: id
      });
      if (!comentario)
        throw boom.notFound('Comentario no encontrado');
      return comentario;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let comentari = await ComentariosModel.findOne({
      _id: id
    });
    if (!comentari)
      throw boom.notFound('Comentario no encontrado');

    let comentarioOrigin = {
      content: comentari.content
    };

    const { content } = changes;
    comentari.content = content;

    comentari.save();

    return {
      old: comentarioOrigin,
      changed: comentari
    }
  }

  async deleteDB(id) {
    let comentario = await ComentariosModel.findOne({
      _id: id
    });
    const { deletedCount } = await ComentariosModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Comentario no encontrado');
    return comentario;
  }

  async findComentarioByReporte(id) {
    try {
      const comentarios = await ComentariosModel.find({
        _reportes: id
      }).sort({"_id" : -1}).populate('_user');
      if (!comentarios)
        throw boom.notFound('No se han encontrado coincidencias');
      return comentarios;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

}

module.exports = ComentariosService;