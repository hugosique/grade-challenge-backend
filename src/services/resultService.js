const db = require('../db');

module.exports = {
    listAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Resultado',
            (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });
        });
    },
};