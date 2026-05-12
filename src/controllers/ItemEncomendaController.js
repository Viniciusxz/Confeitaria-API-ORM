import Controller from "./Controller.js";
import ItemEncomendaServices from "../services/ItemEncomendaServices.js";

const itemencomendaServices = new ItemEncomendaServices();

class ItemEncomendaController  extends Controller {
    constructor() {
        super(itemencomendaServices);
    }
}

export default ItemEncomendaController;