import Controller from "./Controller.js";
import AdminServices from "../services/AdminServices.js";

const adminServices = new AdminServices();

class AdminController extends Controller {
    constructor () {
        super(adminServices);
    }
}

export default AdminController;