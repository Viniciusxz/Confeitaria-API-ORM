import database from "../models/index.js";

class ItemEncomendaController {
    static async pegaTodos (req, res) {
        try {
            const ListaItemEncomendas = await database.ItemEncomenda.findAll();
            return res.status(200).json(ListaItemEncomendas);
        } catch (erro) {
            // erro
        }
    }
}

export default ItemEncomendaController;