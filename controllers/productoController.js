const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) => {
    console.log(req.body);
    console.log('desde crear oriducto');
    try {
        let producto;

        // Creamos nuesto producto
        producto = new Producto(req.body);
        await producto.save();
        res.send(producto);
        
    } catch (error) {
       console.log(error);
       res.status(500).send('Hubo un erro'); 
    }
}