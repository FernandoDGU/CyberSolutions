const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // nombre, correo, telefono, contraseña, tipo, id_sucursal
    name:{
        type: String,
        required:[true, 'Nombre es requisito'],
    },
    email:{
        type: String,
        required:[true, "Correo es requisito"],
        unique: true
    },
    phoneNumber:{
        type: Number,
        minlenth: [10, "El número debe de tener 10 digitos"]
    },
    password:{
        type: String,
        required:[true, "Contraseña es requisito"],
        minlength:[8, 'La contraseña es muy corta']
    },
    userType:{
        type: Number,
        required:[true, "Tipo de usuario es requisito"]
    },
    _sucursal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "sucursal"
    }
})

const User = mongoose.model("user", userSchema);
module.exports = User;