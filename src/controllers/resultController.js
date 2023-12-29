const resultService = require('../services/resultService');

module.exports = {
    listAll: async (req, res) => {
        let json = {error: '', result:[]};
        let result = await resultService.listAll();

        if(result) {
            json.result = result;
        } else {
            json.error = 'Erro ao listar resultado!';
        };

        res.json(json);
    },
};