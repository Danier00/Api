const express = require('express');
const router = express.Router();
const { login, getLogin } = require('../controllers/login.controller');


// Ruta de login
router.post('/', login);

// Ruta de login
router.get('/', getLogin);

module.exports = router;