const mysql = require('mysql2');

const connection = mysql.createConnection(process.env.DATABASE_URL)

connection.connect((error) => {
    if(error) throw error;
    console.log(`Conectado ao banco de dados: ${process.env.DB_NAME}`)
});

module.exports = connection;