const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Definitiva');

const objectdb = mongoose.connection

objectdb.on('connected', ()=>{console.log('Conexion correcta a MongoDB')});
objectdb.on('error', ()=>{console.log('Error en la conexion a MongoDB')});

module.exports = mongoose