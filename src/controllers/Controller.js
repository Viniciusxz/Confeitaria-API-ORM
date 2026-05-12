class Controller {
    constructor (entityService) {
        this.entityService = entityService;
    }

    pegaTodos = async (req, res) => {
        try {
            const registros = await this.entityService.pegaTodosOsRegistros();
            return res.status(200).json(registros);
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        };
    };

    pegaUmPorId = async (req, res) => {
        const { id } = req.params;

        const idNumero = Number(id);
        if (isNaN(idNumero)) {
            return res.status(400).json({ mensagem: "ID inválido" });
        }
        try {
            const registro = await this.entityService.pegaUmPorId(idNumero);
            return res.status(200).json(registro);
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }

    criarNovo = async(req, res) => {
        const novosDados = req.body;
        try {
            const novoRegistro = await this.entityService.criarRegistro(novosDados);
            return res.status(201).json(novoRegistro);
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }

    atualiza = async (req, res) => {
        const { id } = req.params;
        const dadosAtualizados = req.body;

        const idNumero = Number(id);
        if (isNaN(idNumero)) {
            return res.status(400).json({ mensagem: "ID inválido" });
        }
        try {
            const foiAtualizado = await this.entityService.atualizaRegistro(dadosAtualizados, idNumero);
            if (!foiAtualizado) {
              return res.status(400).json({ mensagem: 'registro não foi atualizado.' });  
            }
            return res.status(200).json({ mensagem: 'Atualizado com sucesso' });
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }

    exclui = async (req, res) => {
        const { id } = req.params;

        const idNumero = Number(id);
        if (isNaN(idNumero)) {
            return res.status(400).json({ mensagem: "ID inválido" });
        };
        try {
            await this.entityService.excluiRegistro(idNumero);
            return res.status(200).json({ mensagem: `ID ${id} deletado` });
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
        
    }
}

export default Controller;