const UserModel = require('./../models/userSchema');
const boom = require('@hapi/boom');

class UserService {

  async findAll(limit) {
    let usersDB = await UserModel.find();

    if (!usersDB || usersDB.length < 1)
      throw boom.notFound('No hay usuarios registrados');

    usersDB = limit ? usersDB.filter((item, index) => item && index < limit) : usersDB;
    return usersDB;
  }

  async createDB(data) {
    const model = new UserModel(data);
    await model.save();
    return data;
  }

  async findOneDB(id) {
    try {

      const user = await UserModel.findOne({
        _id: id
      });
      if (!user)
        throw boom.notFound('Usuario no encontrado');
      return user;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

  async updateDB(id, changes) {
    let usua = await UserModel.findOne({
      _id: id
    });
    if (!usua)
      throw boom.notFound('Usuario no encontrado');

    let userOrigin = {
      name: usua.name,
      phoneNumber: usua.phoneNumber
    };

    const { name, phoneNumber } = changes;
    usua.name = name;
    usua.phoneNumber = phoneNumber;

    usua.save();

    return {
      old: userOrigin,
      changed: usua
    }
  }

  async deleteDB(id) {
    let user = await UserModel.findOne({
      _id: id
    });
    const { deletedCount } = await UserModel.deleteOne({
      _id: id
    });
    if (deletedCount <= 0)
      throw boom.notFound('Usuario no encontrado');
    return user;
  }

  async findByEmailAndPassword(userP) {
    try {

      const user = await UserModel.findOne({
        email: userP.email,
        password: userP.password
      });
      if (!user)
        throw boom.notFound('No se ha encontrado coincidencia');
      return user;

    } catch (error) {
      throw boom.conflict("Error: " + error.message)
    }
  }

}


module.exports = UserService;