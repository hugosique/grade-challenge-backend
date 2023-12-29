import express, { Router } from 'express';
import resultController from './controllers/resultController';

const router: Router = express.Router();

// Controllers
// Certifique-se de que resultController está em TypeScript
// Se o controller ainda estiver em JavaScript, você pode ajustar o import conforme necessário

// Resultado
router.get('/result', resultController.listAll);

export default router;
