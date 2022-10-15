const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser:true})
.then(() =>{
    console.log("Conectado a la base de datos MongoDB");
})
.catch(() =>{
    console.log("Conexión no establecida");
    process.exit();
})