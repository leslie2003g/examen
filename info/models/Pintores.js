const mongoose = require('mongoose');
//Vamos a crear un Schema (nuestra base de datos)

let Schema = mongoose.Schema;

//Crear la colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    lugar:{
        type: String,
        required: [true, 'Requerimos el lugar']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    },
    año:{
        type: String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);