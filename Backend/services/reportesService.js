const ReportesModel = require('./../models/reportesSchema');
const boom = require('@hapi/boom');

class ReportesService {

  async findAll(limit) {
    let reportesDB = await ReportesModel.find();

    if (!reportesDB || reportesDB.length < 1)
      throw boom.notFound('No hay reportes aún');

    reportesDB = limit ? reportesDB.filter((item, index) => item && index < limit) : reportesDB;
    return reportesDB;
  }

  async createDB(data) {
    const model = new ReportesModel(data);
    await model.save();
    return model;
  }

  async findOneDB(id) {
    try {

      const reporte = await ReportesModel.findOne({
        _id: id
      }).populate('_user _sucursal _category');
      if (!reporte)
        throw boom.notFound('Reporte no encontrado');
      return reporte;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let report = await ReportesModel.findOne({
      _id: id
    });
    if (!report)
      throw boom.notFound('Reporte no encontrado');

    let reporteOrigin = {
      name: report.name,
      description: report.description,
      state: report.state,
      endDate: report.endDate
    };

    const { name, description, state } = changes;
    report.name = name;
    report.description = description;
    report.state = state;
    if (state === 'CERRADO') {
      report.endDate = Date.now();
    }

    report.save();

    return {
      old: reporteOrigin,
      changed: report
    }
  }

  async deleteDB(id) {
    let reporte = await ReportesModel.findOne({
      _id: id
    });
    const { deletedCount } = await ReportesModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Reporte no encontrado');
    return reporte;
  }

  async findReporteBySucursal(id) {
    try {
      const reportes = await ReportesModel.find({
        _sucursal: id
      }).sort({"_id" : -1}).populate("_user _category");
      if (!reportes)
        throw boom.notFound('No se ha encontrado coincidencia');
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async findBySucursalAndState(reporteP) {
    try {
      const reportes = await ReportesModel.find({
        _sucursal: reporteP._sucursal,
        state: reporteP.state
      });
      if (!reportes)
        throw boom.notFound('No se ha encontrado coincidencias');
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async findByRangoFecha(reporteP) {
    try {
      const reportes = await ReportesModel.find({
        endDate: {
          $gte: new Date(Date.now() - 3600000 * 24 * reporteP.ago),
          $lt: Date.now()
        }
      });
      if (!reportes)
        throw boom.notFound('No se ha encontrado coincidencias');
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async findReporteByCategory(idCat, idSuc) {
    try {
      const reportes = await ReportesModel.find({
        _category: idCat,
        _sucursal: idSuc
      }).sort({"_id" : -1}).populate("_user _category");
      if (!reportes)
        throw boom.notFound('No se ha encontrado coincidencia');
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async findLast5(idSuc) {
    try {
      const reportes = await ReportesModel.find({_sucursal: idSuc}).sort({startDate:-1}).limit(5).populate("_user _category");
      if (!reportes)
        throw boom.notFound('No se ha encontrado coincidencia');
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async counts(idSuc) {
    try {
      const reportesAbiertos = await ReportesModel.find({state:"abierto", _sucursal: idSuc}).count();
      const reportesCerrados = await ReportesModel.find({state:"cerrado", _sucursal: idSuc}).count();
      const reportesTotales = await ReportesModel.find({_sucursal: idSuc}).count();
      let reportes = {
        abiertos: reportesAbiertos,
        cerrados: reportesCerrados,
        totales: reportesTotales
      }
      return reportes;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

}


module.exports = ReportesService;