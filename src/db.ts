import mysql, { Connection, ConnectionOptions } from 'mysql2';

console.log(process.env.PORT)
console.log(process.env.DATABASE_URL)

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