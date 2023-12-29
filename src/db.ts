import mysql, { Connection, ConnectionOptions } from 'mysql2';

if (!process.env.DATABASE_URL) {
    throw new Error('A variável de ambiente DATABASE_URL não está definida.');
}

const databaseUrl: string = process.env.DATABASE_URL;
const connection: Connection = mysql.createConnection(databaseUrl);

connection.connect((error) => {
    if (error) throw error;
    console.log(`Conectado ao banco de dados`);
});

export default connection;