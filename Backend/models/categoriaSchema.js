const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "El nombre es requisito"]
    }
});

const Categorias = mongoose.model("categorias", CategoriaSchema);
module.exports = Categorias;