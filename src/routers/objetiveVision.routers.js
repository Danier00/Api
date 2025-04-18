const express = require('express');
const router = express.Router();
const { getAllObjetivesVisions, updateObjetiveVision } = require('../controllers/objetiveVision.controller');

// Obtener todos los productos
router.get('/', getAllObjetivesVisions);

// Actualizar un producto
router.put('/:id', updateObjetiveVision);

module.exports = router;
