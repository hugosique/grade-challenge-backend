import { QueryError, RowDataPacket } from 'mysql2';
import db from '../db';

interface Result {
    // Defina os tipos para as colunas do seu resultado conforme necessário
    // Por exemplo:
    id: number;
    bimestre: string;
    disciplina: string;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
}

export default {
    listAll: (): Promise<Result[]> => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Resultado', (error: QueryError | null, results?: RowDataPacket[]) => {
                if (error) {
                    reject(error);
                    return;
                }
                // Se necessário, você pode mapear os resultados para um formato mais específico
                const mappedResults: Result[] = results?.map((result) => ({
                    id: result.id,
                    bimestre: result.bimestre,
                    disciplina: result.disciplina,
                    nota: result.nota,
                    criadoEm: result.criadoEm,
                    atualizadoEm: result.atualizadoEm,
                })) || [];
                
                resolve(mappedResults);
            });
        });
    },
};
