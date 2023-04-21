//Object
const Inventario = require('../public/DB/inventario');

//Class
const Producto = require('../public/DB/productos');

const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/productos', (req, res) => {
  res.json(Inventario.listado());
})
app.get('/productos/:id', (req, res) => {
  console.log(req.params.id);
  res.json(Inventario.buscar(req.params.id));
});

app.post('/', (req, res) => {
  console.log(req.body);
  let producto = new Producto(Inventario.listado().length, req.body.nombre, req.body.precio, req.body.cantidad);
  Inventario.addProduct(producto);
  res.redirect('/');
});

app.listen(3000)