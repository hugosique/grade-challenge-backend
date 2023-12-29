import { Request, Response } from 'express';
import resultService from '../services/resultService';

export default {
    listAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const results = await resultService.listAll() || [];
            res.json({result: results});
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar resultados'})
        }
    },
};
