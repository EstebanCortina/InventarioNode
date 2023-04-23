//Class
const Producto = require('./DB/Inventario/productosDB');

//Object
const Inventario = require('./DB/Inventario/inventarioDB');


const express = require('express');
const app = express();

const path = require('path');
const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
const routerProductos = require('./routers/productos');
app.use('/api/productos', routerProductos);



//Form landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});
app.post('/', (req, res) => {
  console.log(req.body);
  let product = new Producto(Inventario.listado().length, req.body.nombre, req.body.precio, req.body.cantidad);
  Inventario.addProduct(product);
  res.redirect('/');
});


//Server
app.listen(3000)