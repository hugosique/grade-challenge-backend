import { QueryError, RowDataPacket } from 'mysql2';
import { IResult } from '../models/result.model';
import db from '../db';

export default {
    listAll: (): Promise<IResult[]> => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM Resultado', (error: QueryError | null, results?: RowDataPacket[]) => {
                if (error) {
                    reject(error);
                    return;
                };

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

    create: (body: IResult): Promise<RowDataPacket[]> => {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO Resultado (bimestre, disciplina, nota, criadoEm, atualizadoEm) VALUES (?, ?, ?, ?, ?)",
                [body.bimestre, body.disciplina, body.nota, body.criadoEm, body.atualizadoEm],
                (error: QueryError | null, results: RowDataPacket[]) => {
                    if(error) {
                        reject(error);
                        return;
                    };

                    resolve(results);
                }
            );
        });
    },

    delete: (id: number): Promise<RowDataPacket[]> => {
        return new Promise((resolve, reject) => {
            db.query(
                'DELETE FROM Resultado WHERE id = ?',
                [id],
                (error: QueryError | null, results: RowDataPacket[]) => {
                    if (error) {
                        reject(error);
                        return
                    };

                    resolve(results);
                }
            );
        });
    },

    isDuplicate: async (bimestre: number, disciplina: string): Promise<boolean> => {
        const queryResult: any = await db.query(
            'SELECT * FROM Resultado WHERE bimestre = ? AND disciplina = ?',
            [bimestre, disciplina]
        );

        console.log(queryResult);

        return queryResult[0].length > 0;
    },
    
};
