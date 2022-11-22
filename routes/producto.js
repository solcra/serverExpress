//Rutas para producto
const express = require('express');

const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
// router.post('/', ()=>{
//     console.log('Creando producto..');
// })
router.post('/', productoController.crearProducto)

module.exports = router;