const express = require('express');
const authController = require('../controllers/authController'); // Ensure this path is correct

const router = express.Router();

// Define routes
router.post('/login', authController.login); // Ensure login is a function
router.post('/register', authController.register); // Ensure register is a function

module.exports = router;