import { Request, Response } from 'express';
import resultService from '../services/result.service';

export default {
    listAll: async (req: Request, res: Response): Promise<void> => {
        try {
            const results = await resultService.listAll() || [];
            res.json({result: results});
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar resultados'})
        }
    },

    create: async (req: Request, res: Response): Promise<void> => {
        const body = {
            bimestre: req.body.bimestre,
            disciplina: req.body.disciplina,
            nota: req.body.nota,
            criadoEm: req.body.criadoEm,
            atualizadoEm: req.body.atualizadoEm,
        };

        try {
            const createResult = await resultService.create(body);
            res.json({result: createResult});
        } catch {
            res.status(500).json({ error: 'Erro ao criar resultados'})
        };
    },

    delete: async (req: Request, res: Response): Promise<void> => {
        const id = Number(req.params.id);

        try {
            const deleteResult = await resultService.delete(id);
            res.json({result: deleteResult});
        } catch {
            res.status(500).json({ error: 'Erro ao deletar resultado'});
        };
    }
};
