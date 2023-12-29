import { QueryError, RowDataPacket } from 'mysql2';
import { IResult } from '../models/resultModel';

import db from '../db';

export default {
    listAll: (): Promise<IResult[]> => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Resultado', (error: QueryError | null, results?: RowDataPacket[]) => {
                if (error) {
                    reject(error);
                    return;
                }
                // Se necessário, você pode mapear os resultados para um formato mais específico
                const mappedResults: IResult[] = results?.map((result) => ({
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
