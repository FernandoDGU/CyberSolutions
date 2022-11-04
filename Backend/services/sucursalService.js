const SucursalModel = require('./../models/sucursalSchema');
const boom = require('@hapi/boom');

class SucursalService {

  async findAll(limit) {
    let sucursalDB = await SucursalModel.find();

    if (!sucursalDB || sucursalDB.length < 1)
      throw boom.notFound('No hay sucursales registradas');

    sucursalDB = limit ? sucursalDB.filter((item, index) => item && index < limit) : sucursalDB;
    return sucursalDB;
  }

  async createDB(data) {
    const model = new SucursalModel(data);
    await model.save();
    return data;
  }

  async findOneDB(id) {
    try {

      const sucursal = await SucursalModel.findOne({
        _id: id
      });
      if (!sucursal)
        throw boom.notFound('Sucursal no encontrada');
      return sucursal;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let sucursa = await SucursalModel.findOne({
      _id: id
    });
    if (!sucursa)
      throw boom.notFound('Sucursal no encontrada');

    let sucursalOrigin = {
      name: sucursa.name
    };

    const { name } = changes;
    sucursa.name = name;

    sucursa.save();

    return {
      old: sucursalOrigin,
      changed: sucursa
    }
  }

  async deleteDB(id) {
    let sucursal = await SucursalModel.findOne({
      _id: id
    });
    const { deletedCount } = await SucursalModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Sucursal no encontrada');
    return sucursal;
  }

}

module.exports = SucursalService;