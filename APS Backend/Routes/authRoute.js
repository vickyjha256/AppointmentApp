const express = require('express');
const authController = require('../Controllers/authController');
const {body} = require("express-validator");

const router = express.Router();

// Auth routes
router.post('/register',[
    body("name").isLength({min:3}).withMessage("Name must be at least length of 3"),
    body("email").isEmail().toLowerCase().isLength({min: 5}).withMessage("Please enter a valid email."),
    body("password").isLength({min: 5}).isStrongPassword().withMessage("Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character."),
    body("phone").isLength({min: 10, max: 10}),
    body("role").toLowerCase()
], authController.register);


router.post('/login', [
    body("email").isEmail().toLowerCase().isLength({min: 5}).withMessage("Please enter a valid email."),
    body("password").isLength({min: 5}).isStrongPassword().withMessage("Password must contain atleast 1 uppercase, 1 lowercase, 1 number and 1 special character."),
], authController.login);


router.post('/logout', authController.logout);

module.exports = router;
