import Controller from "./Controller.js";
import EncomendaServices from "../services/EncomendaServices.js";

const encomendaServices = new EncomendaServices();
class EncomendaController  extends Controller {
    constructor() {
        super(encomendaServices);
    }
}

export default EncomendaController;