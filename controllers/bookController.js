// CONTROLLER = Incluimos las funciones para acceder a nuestras rutas y poder generar cambios


// 1. IMPORTACION (Modelo del los libros)
const Book 		= require("./../models/Book")



// 2. FUNCIONES (Para cada ruta en particular y luego se exporta routes)

exports.getAllBooks = async (req, res) => {
	
	// Buscamos con metodo find todos los libros en nuestra base de datos
	const allBooks = await Book.find({})

	console.log(allBooks)

	// Renderizamos todos los libros
	res.render("books/list", {
		data: allBooks
	})
}

exports.getBook = async (req, res) => {
	// Funcion que me permite obtener la ruta de un libro en particular por su ID
	const singleBookID = req.params.bookID

	const getTheBook = await Book.findById(singleBookID)

	console.log(getTheBook)

	// Renderizamos la informacion del libro en particular al cual le damos click
	res.render("books/single", {
		data: getTheBook
	})
}

exports.viewCreateBook = async (req, res) => {

	res.render("books/create")

}

exports.createBook = async (req, res) => {

	console.log(req.body)

	// Info a mostar al crear mi nuevo libro
	const title = req.body.title
	const author = req.body.author
	const description = req.body.description
	const rating = req.body.rating


	const newBookCreated = await Book.create({title, author, description, rating})

	console.log(newBookCreated)

	// Una vez generado el nuevo libro me redirige a la pagina principal de liros
	res.redirect("/books")

	console.log("Datos recibidos")


}



exports.viewEditBook = async(req, res) => {

	//Nos permite obtener los datos dinamicos de una ruta
	console.log(req.params)

	// Asignar el id a una varibale del libro
	const bookID = req.params.bookID

	// Encontrar un libro en particular
	const foundBook = await Book.findById(bookID)

	console.log(foundBook)

	res.render("books/edit",{
		// los daros del lirbo se manda a tareves de de data
		data:foundBook
	} )

}



exports.editBook = async(req, res) => {

	// 1. ID del libro a editar
	const bookID = req.params.bookID



	// 2. Los nuevos cambios del formulario
	const title = req.body.title
	const description = req.body.description
	const author = req.body.author
	const rating = req.body.rating

	console.log(bookID)
	console.log(title, description, author, rating)


	// 3. Realizar la actualizacion en la base de datos

	// Lo busca en la base de datos por su ID, donde le menciona que se le pasaran nuevos arguments
	const updatedBook = await Book.findByIdAndUpdate(
		bookID,
		{title, description, author, rating},
		{new: true}
		
	)

	console.log(updatedBook)

	// Al actulizarlo me manda a la pagina ya con el libro actualizado en particular
	res.redirect(`/books/${updatedBook._id}`)

}




exports.deleteBook = async (req, res) => {

	// Identificar el libro que quiero borrar
	const bookID = req.params.bookID

	// Borrado en base de datos
	const deletedBook = await Book.findByIdAndDelete(bookID)

	console.log(deletedBook)

	// Redireccion
	res.redirect("/books")


}