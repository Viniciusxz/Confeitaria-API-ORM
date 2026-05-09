import { Router } from 'express';
import  ClienteController  from '../controllers/ClienteController.js';

const router = Router();

router.get('/clientes', ClienteController.pegaTodas);

export default router;