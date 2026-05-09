import express from 'express'
import clientes from './clienteRoute.js'


export default app => {
    app.use(
        express.json(),
        clientes,
    );
};