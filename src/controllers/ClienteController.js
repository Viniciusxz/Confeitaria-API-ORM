import Controller from './Controller.js';
import ClienteServices from '../services/ClienteServices.js';


const clienteServices = new ClienteServices();

class ClienteController  extends Controller {
    constructor() {
        super(clienteServices);
    }
    // Papel do controller é receber o que vem da rota e mandar pro modelo, ou seja, responsavel por gerenciar as requisições e respostas.
}

export default ClienteController;