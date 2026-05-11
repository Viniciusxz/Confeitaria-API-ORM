import database from '../models/index.js'

class CategoriaController {
    static async pegaTodos (req, res) {
        try {
            const ListaDeCategorias = await database.Categoria.findAll();
            return res.status(200).json(ListaDeCategorias)

        } catch (erro) {
            // erro
        }
    }
}

export default CategoriaController;