const express = require('express');
const router = express.Router();

const { createPet } = require('../controllers/petsController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createPet);

module.exports = router;