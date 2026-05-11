import database from "../models/index.js"

class ProdutoController {
    static async pegaTodos (req, res) {
        try {
            const ListaDeProdutos = await database.Produto.findAll();
            return res.status(200).json(ListaDeProdutos);
        } catch (erro) {
            // erro
        }
    }
}

export default ProdutoController;