# InventarioNode-API
_Inventario de productos tipo API usando NodeJS y Express._

### Endpoints para consultar información (GET)
| Endpoint | Descripción |
| ------ | ------ |
| __/api/productos__ | Listar todos los productos |
| __/api/productos/{id}__ | Buscar un producto por su ID |


# Respuestas

### Status Codes
| Código | Descripción |
| ------ | ------ |
| **200** | Producto encontrado |
| **404** | Producto no encontrado |

# Ejemplos
### Producto encontrado (200)
```JSON
 [
  {
    "id": 0,
    "Nombre": "Lápiz",
    "Precio": 10,
    "Cantidad": 2
  },
  
  {
    "id": 1,
    "Nombre": "Borrador",
    "Precio": 4,
    "Cantidad": 8
  }
 ]
```
### Producto **no** encontrado (404)
```JSON
 [
  {  
    "error": 404,
    "description":"No hay productos con el id: 1" 
  }
 ]
```
> __Recordatorio:__ La información se encuentra almacenada localmente en DB/inventario.js, por lo que primero hay que entrar a la ruta base para añadir nuevos productos y posteriormente consultarlos, de lo contrario siempre se obtendrá error 404.

## ¿Qué aprendí?
- 📦 Import/Export de módulos, clases y objetos
- 🛣️ Manejo de rutas con Express
- 🚦  Manejo de routers
- 🎯 Pasar parámetros como endpoint
- 🔄 Nodemon
- 💡  Mejor entendimiento de Promises y uso de Async/Await
- 💬 Usar ChatGPT para hacer formularios rápidos
- ⏱️ Diferencia entre asíncrono y tiempo real

### Referencias 
- [FreeCodeCamp: Aprende Node.js y Express - Curso desde Cero](https://youtu.be/1hpc70_OoAg)
