// En esta carpeta se crea el modelo(objeto) con los elementos necesarios para crearse


// 1. IMPORTACIONES
const mongoose	= require("mongoose")

// 2. SCHEMA (Requisitos para crear un libro)
const bookSchema = mongoose.Schema({
	title: String,
	description: String,
	author: String,
	rating: Number
},
{
	timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})



// 3. MODELO (Se crea el modelo)
const Book = mongoose.model("Book", bookSchema)



// 4. EXPORTACIÓN del modelo para utilizarlo en otras partes del proyecto
module.exports = Book

