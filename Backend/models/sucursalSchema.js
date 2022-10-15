const mongoose = require("mongoose");

const sucursalSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "El nombre es requisito"]
    }
});

const Sucursal = mongoose.model("sucursal", sucursalSchema);
module.exports = Sucursal;