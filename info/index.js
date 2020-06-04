//Importamos dependencias
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Creamos una constante para el valor puerto
const PUERTO = process.env.PORT || 3000;

//Emplear las rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y hbd
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Vamos a decirle a express la ruta a emplear
app.use('/', pintoresRouter);

/* La conexion com mongoDB */
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://elsanto:1234567890@cluster0-23tpt.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>{
            console.log('Conexion establecida :)')
        })
        .catch(err => console.log(err));

/* Arrancamos el servidor web */
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...')
});
