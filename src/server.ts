import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';

dotenv.config({ path: 'variables.env' });

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
