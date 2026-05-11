import database  from '../models/index.js';


class ClienteController { // Papel do controller é receber o que vem da rota e mandar pro modelo, ou seja, responsavel por gerenciar as requisições e respostas.
    static async pegaTodas (req, res) {
        try {
            const ListaDeClientes = await database.Cliente.findAll();
            return res.status(200).json(ListaDeClientes);
            // acessar o modelo
        } catch (erro) {
            // erro
        }
    }
}

export default ClienteController;