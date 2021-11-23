// Aqui simplemente se declaran las rutas (no las funciones)


// 1. IMPORTACIONES

const express = require("express")
const router = express.Router() 

const indexController = require("./../controllers/indexController") // Nos traemos las funciones



// 2. RUTAS DE LA URL BASE

// Aqui incluimos la URL de la ruta con la funcion de mi carpeta controller
router.get("/ejemplo", indexController.ejemplo)

router.get("/", indexController.home)


// 3. EXPORTACIONES

module.exports = router


