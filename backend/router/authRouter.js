const express = require('express')
const { body } = require('express-validator');
const AuthController = require('../controllers/AuthController')

const router = express.Router()
const authController = new AuthController()

router.post(
    '/signin'/* ,
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }),
    ] */,
    authController.userLogin
)

router.post(
    '/signup',
    /* [
        body('user.email').isEmail().withMessage('Invalid Email'),
        body('user.password')
            .isLength({ min: 6 })
            .withMessage('Invalid Password'),
        body('user.name').isAlpha().withMessage('Invalid Name'),
        body('user.place').isAlpha().withMessage('Invalid Place'), 
        // default role is 2 (user)
    ], */
    authController.userSignUp
)

module.exports = { authRouter: router, authController } //authController is for testing
