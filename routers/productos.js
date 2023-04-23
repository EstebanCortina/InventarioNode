const { listar, buscarId } = require('../public/buscarProductos');
const express = require('express');

const routerProductos = express.Router();


routerProductos.get('/', async (req, res) => {
  try {
    let products = await listar();
    console.log('Productos mostrados');
    res.json(products);
  } catch (error) {
    let err = new Error(error);
    console.error(err);
    res.status(404);
    res.json({
      "error": "404",
      "description": err.message
    });
  }
})

routerProductos.get('/:id', async (req, res) => {
  console.log("Buscar:" + req.params.id);
  try {
    let product = await buscarId(req.params.id);
    console.log("Encontrado:");
    console.log(product);
    res.json(product);
  } catch (error) {
    let err = new Error(error);
    console.error(err);
    res.status(404);
    res.json({
      "error": "404",
      "description": err.message
    });
  }
});

module.exports = routerProductos;