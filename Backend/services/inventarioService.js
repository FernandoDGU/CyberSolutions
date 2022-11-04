const InventarioModel = require('./../models/inventarioSchema');
const boom = require('@hapi/boom');

class InventarioService {

  async findAll(limit) {
    let inventariosDB = await InventarioModel.find();

    if (!inventariosDB || inventariosDB.length < 1)
      throw boom.notFound('No hay inventarios');

    inventariosDB = limit ? inventariosDB.filter((item, index) => item && index < limit) : inventariosDB;
    return inventariosDB;
  }

  async createDB(data) {
    const model = new InventarioModel(data);
    await model.save();
    return data;
  }

  async findOneDB(id) {
    try {

      const inventary = await InventarioModel.findOne({
        _id: id
      });
      if (!inventary)
        throw boom.notFound('Inventario no encontrado');
      return inventary;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let invent = await InventarioModel.findOne({
      _id: id
    });
    if (!invent)
      throw boom.notFound('Inventario no encontrado');

    let inventaryOrigin = {
      name: invent.name,
      porcentaje: invent.porcentaje
    };

    const { name, porcentaje } = changes;
    invent.name = name;
    invent.porcentaje = porcentaje;

    invent.save();

    return {
      old: inventaryOrigin,
      changed: invent
    }
  }

  async deleteDB(id) {
    let inventary = await InventarioModel.findOne({
      _id: id
    });
    const { deletedCount } = await InventarioModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Inventario no encontrado');
    return inventary;
  }

  async findInventarioBySucursal(id) {
    try {
      const inventarios = await InventarioModel.find({
        _sucursal: id
      });
      if (!inventarios)
        throw boom.notFound('No se ha encontrado coincidencia');
      return inventarios;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

}


module.exports = InventarioService;