const mongoose = require("mongoose");

const comentariosSchema = mongoose.Schema({
    // id_reporte, id_usuario, contenido, fecha
    _reportes:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reportes"
    },
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    content:{
        type:String, 
        required:[true, "El contenido es requerido"]
    },
    date:{
        type:String,
        required:[true, "La fecha es requerida"]
    }

});

const Comentarios = mongoose.model("comentarios", comentariosSchema);
module.exports = Comentarios;