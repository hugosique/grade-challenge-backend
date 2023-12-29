const express = require('express');
const router = express.Router();

// Controllers
const resultController = require('./controllers/resultController')

// Resultado
router.get('/result', resultController.listAll);

module.exports = router;