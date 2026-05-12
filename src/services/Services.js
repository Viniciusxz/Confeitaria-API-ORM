import database from "../models/index.js"

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return database[this.model].findAll()
    }


    async pegaUmPorId(id) {
        return database[this.model].findByPk(id);
    }

    async criarNovo(dadosDoRegistro) {
        return database[this.model].create(dadosDoRegistro);
    }

    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = await database[this.model].update(dadosAtualizados, {
            where: { id: id }
        });
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false;
        }
        return true;
    }

    async excluiRegistro(id) {
        return database[this.model].destroy({ where: { id: id } })
    }
}

export default Services;