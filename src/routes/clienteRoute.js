import { Router } from 'express';
import  ClienteController  from '../controllers/ClienteController.js';
import CategoriaController from '../controllers/CategoriaController.js';
import EncomendaController from '../controllers/EncomendaController.js';
import ItemEncomendaController from '../controllers/ItemEncomendaController.js';

const router = Router();

router.get('/clientes', ClienteController.pegaTodas);
router.get('/categorias', CategoriaController.pegaTodos);
router.get('/encomendas', EncomendaController.pegaTodos);
router.get('/itensencomendas', ItemEncomendaController.pegaTodos);

export default router;