const express = require('express');
const router = express.Router();
const { getAllObjetivesVisions, updateObjetiveVision, createObjetiveVision } = require('../controllers/objetiveVision.controller');

// Obtener todos los productos
router.get('/', getAllObjetivesVisions);

router.post("/", createObjetiveVision)
// Actualizar un producto
router.put('/:id', updateObjetiveVision);

module.exports = router;
