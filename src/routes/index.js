import express from 'express'
import rotas from './clienteRoute.js'


export default app => {
    app.use(express.json());
    app.use(rotas);
};