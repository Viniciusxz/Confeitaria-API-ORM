import Controller from "./Controller.js";
import ProdutoServices from "../services/ProdutoServices.js";

const produtoServices = new ProdutoServices();

class ProdutoController  extends Controller {
    constructor() {
        super(produtoServices)
    }
}

export default ProdutoController;