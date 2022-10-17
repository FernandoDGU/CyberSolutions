const CategoryModel = require('./../models/categoriaSchema');
const boom = require('@hapi/boom');

class CategoryService {

  async findAll(limit) {
    let categoriesDB = await CategoryModel.find();

    if (!categoriesDB || categoriesDB.length < 1)
      throw boom.notFound('No hay categorías registradas');

    categoriesDB = limit ? categoriesDB.filter((item, index) => item && index < limit) : categoriesDB;
    return categoriesDB;
  }

  async createDB(data) {
    const model = new CategoryModel(data);
    await model.save();
    return data;
  }

  async findOneDB(id) {
    try {

      const category = await CategoryModel.findOne({
        _id: id
      });
      if (!category)
        throw boom.notFound('Categoría no encontrada');
      return category;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let categori = await CategoryModel.findOne({
      _id: id
    });
    if (!categori)
      throw boom.notFound('Categoría no encontrada');

    let categoryOrigin = {
      name: categori.name
    };

    const { name } = changes;
    categori.name = name;

    categori.save();

    return {
      old: categoryOrigin,
      changed: categori
    }
  }

  async deleteDB(id) {
    let category = await CategoryModel.findOne({
      _id: id
    });
    const { deletedCount } = await CategoryModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Categoría no encontrada');
    return category;
  }

}


module.exports = CategoryService;