import { Router } from 'express';
import ClienteController  from '../controllers/ClienteController.js';
import CategoriaController from '../controllers/CategoriaController.js';
import EncomendaController from '../controllers/EncomendaController.js';
import ItemEncomendaController from '../controllers/ItemEncomendaController.js';
import ProdutoController from '../controllers/ProdutoController.js';

const clienteController = new ClienteController();
const categoriaController = new CategoriaController();
const encomendaController = new EncomendaController();
const itemencomendaController = new ItemEncomendaController();
const produtoController = new ProdutoController(); 

const router = Router();

router.get('/clientes', (req, res) => clienteController.pegaTodos(req, res));
router.get('/categorias', (req, res) => categoriaController.pegaTodos(req, res));
router.get('/encomendas', (req, res) => encomendaController.pegaTodos(req, res));
router.get('/itensencomendas', (req, res) =>  itemencomendaController.pegaTodos(req, res));
router.get('/produtos', (req, res) => produtoController.pegaTodos(req, res));

export default router;