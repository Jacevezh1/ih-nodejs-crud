// ./routes/books.js

// 1. IMPORTACIONES
const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")


// 2. RUTEO CON BASE URL

// CREATE
// CREAR LIBRO - VISTA (PARA VER EL FORMULARIO)
router.get("/create", bookController.viewCreateBook)
// CREAR LIBRO - RUTA PARA EL FORMULARIO
router.post("/create", bookController.createBook)

// READ
// LECTURA DE LOS LIBROS CREADOS
router.get("/", bookController.getAllBooks)

// LECTURA DE UN LIBRO ESPECÍFICO
router.get("/:bookID", bookController.getBook)


//EDITAR (UPDATE)
//Parametros dinamicos
router.get("/:bookID/edit", bookController.viewEditBook)


router.post("/:bookID/edit", bookController.editBook)


//DELETE
//BORAR UN LIBRO
router.post("/:bookID/delete", bookController.deleteBook)


// 3. EXPORTACIÓN
module.exports = router


