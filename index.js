const express = require('express');
const conectarDB = require('./config/db');

// Creamos el servidor
const app = express();

// Conetamos a la BD
conectarDB();
app.use('/api/productos', require('./routes/producto'));

// Definimos ruta principal
// app.get('/', (req,res)=>{
//     res.send('Hola mundo');
// })

app.listen(4000, ()=> {
    console.log('Desde index.js');
    console.log('Desde index2.js');
    console.log('El servidor esta corriendo perfectamente');
})