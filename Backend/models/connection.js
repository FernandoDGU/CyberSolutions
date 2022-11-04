const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const connect = async (url) => {
    await mongoose.connect(url, {
        useNewUrlParser: true //Compatibilidad de servidor
    })
        .then(() => {
            console.log("Conectado a la base de datos MongoDB");
        })
        .catch(() => {
            console.log("Conexión no establecida");
            process.exit();
        });
}


module.exports = connect;