import database from "../models/index.js";

class EncomendaController {
    static async pegaTodos (req, res) {
        try {
            const ListaDeEncomenda = await database.Encomenda.findAll();
            return res.status(200).json(ListaDeEncomenda);
        } catch (erro) {
            // erro
        }
    }
}

export default EncomendaController;