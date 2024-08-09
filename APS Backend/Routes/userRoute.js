const express = require('express');
const userController = require('../Controllers/userController');
const authMiddleware = require("../MiddleWares/authMiddleware");

const router = express.Router();

// User routes
router.get('/users', authMiddleware, userController.getUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);


module.exports = router;
