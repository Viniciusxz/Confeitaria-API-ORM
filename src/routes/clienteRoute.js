import { Router } from "express";
import ClienteController from "../controllers/ClienteController.js";

const clienteController = new ClienteController();

const router = Router();

router.get('/clientes', (req, res) => clienteController.pegaTodos(req, res));
router.get('/clientes/:id', (req, res) => clienteController.pegaUmPorId(req, res));
router.post('/clientes', (req, res) => clienteController.criarNovo(req, res));
router.post('/clientes/:id', (req, res) => clienteController.atualiza(req, res));
router.delete('/pessoas/:id', (req, res) => clienteController.exclui(req, res));

export default router;