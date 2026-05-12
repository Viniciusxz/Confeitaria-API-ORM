import database from "../models/index.js"

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    }

    async pegaTodosOsRegistros() {
        return database[this.model].findAll()
    }
}

export default Services;