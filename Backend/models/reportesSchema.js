const mongoose = require("mongoose");

const reportesSchema = mongoose.Schema({
    //nombre, fecha publicación, descripcion, autor, estado, fecha_terminado, id_sucursal, id_categoria
    name:{
        type:String, 
        required:[true, "El nombre es requerido"]
    },
    startDate:{
        type: Date,
        default: Date.now
    },
    description:{
        type:String,
        required: [true, "La descripción es requerida"]
    },
    _user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }, 
    state:{
        type: String,
    },
    endDate:{
        type: Date
    }, 
    _sucursal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sucursal"
    },
    _category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "categorias"
    }
});


const Reportes = mongoose.model("reportes", reportesSchema);
module.exports = Reportes;