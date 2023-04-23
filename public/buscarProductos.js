const Inventario = require('../DB/inventarioDB');

function buscarId(id) {
  return new Promise((resolve, reject) => {
    let products = Inventario.buscar(id);
    if (products) {
      resolve(products);
    } else {
      reject(`No hay productos con el id: ${id}`);
    }
  })
}
function listar() {
  return new Promise((resolve, reject) => {
    let response = Inventario.listado();
    if (response.length != 0) {
      resolve(response);
    } else {
      reject('No hay productos');
    }
  })
}

module.exports = {
  buscarId: buscarId,
  listar: listar
}