const mongoose = require("mongoose");

const inventarioSchema = mongoose.Schema({
    // nombre producto, categoria, porcentaje, id_sucursal
    name:{
        type:String,
        required:[true,"El nombre es requisito"]
    }, 
    _category:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "categorias"
    },
    porcentaje:{
        type: Number,
        required:[true, "El porcentaje es requisito"]
    },
    _sucursal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sucursal"
    }
});

const Inventario = mongoose.model("inventario", inventarioSchema);
module.exports = Inventario;