import { Router } from 'express';
import  ClienteController  from '../controllers/ClienteController.js';
import CategoriaController from '../controllers/CategoriaController.js';

const router = Router();

router.get('/clientes', ClienteController.pegaTodas);
router.get('/categorias', CategoriaController.pegaTodos);

export default router;