//Object
const Inventario = require('./DB/inventario');

//Class
const Producto = require('./DB/productos');

const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, "./public");
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/productos', (req, res) => {
  res.json(Inventario.listado());
})
app.get('/productos/:id', (req, res) => {
  console.log(req.params.id);
  let products = Inventario.buscar(req.params.id);
  if (products === null) {
    res.status(404);
    res.send(`No existe el producto con id: ${req.params.id}`)
  }
  res.json(products);
});

app.post('/', (req, res) => {
  console.log(req.body);
  let producto = new Producto(Inventario.listado().length, req.body.nombre, req.body.precio, req.body.cantidad);
  Inventario.addProduct(producto);
  res.redirect('/');
});

app.listen(3000)