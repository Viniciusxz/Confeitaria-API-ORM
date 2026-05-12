class Controller {
    constructor (entityService) {
        this.entityService = entityService;
    }

    async pegaTodos(req, res) {
        try {
            const ListaDeRegistro = await this.entityService.pegaTodosOsRegistros();
            return res.status(200).json(ListaDeRegistro);
        } catch (erro) {
            // erro
        }
    }
}

export default Controller;