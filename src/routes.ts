import express, { Router } from 'express';
// Controller
import resultController from './controllers/result.controller';

const router: Router = express.Router();

// Resultado
router.get('/result', resultController.listAll);
router.post('/result', resultController.create);
router.delete('/result/:id', resultController.delete);

export default router;
