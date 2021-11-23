// En este se manejan las funciones para el ruteo y se exportan a las rutas
// Funciones que incluiremos en nuestras rutas (Lo hacemos conforme a patron modular)

// 1. EXPORTACIONES (hacia nuestra carpeta de rutas)

exports.ejemplo = (req, res) => {
	res.send("Estás en el ejemplo")
}


exports.home = (req, res) => {
	res.send("Estás en el home")
}