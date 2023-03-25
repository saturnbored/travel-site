const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const validationResult = require('express-validator')

const { AuthService } = require('../services/authService')

const authService = new AuthService()

class AuthController {
    userLogin = async (req, res, next) => {
        console.log(req.body);
        // req.body = JSON.parse(req.body);
        let email = req.body.email
        let password = req.body.password
        // const validationErr = validationResult(req)
        // if (!validationErr.isEmpty()) {
        //     return res.status(400).json({ errors: validationErr.array() })
        // }
        console.log('here', email, password);
        try {
            let userExist = await authService.findUser({
                email: req.body.email,
            })
            if (!userExist) {
                return res.status(400).json('User Not Found')
            }
            if (userExist) {
                let compareResult = await this.comparePassword(
                    password,
                    userExist.password
                )
                console.log(compareResult)
                if (!compareResult) {
                    return res.status(401).json('Email ID or Password Mismatch')
                }
                let token = await this.createToken(
                    userExist.email,
                    userExist.id,
                )

                return res.status(200).send(JSON.stringify({
                    name: userExist.name,
                    token: token,
                }))
            }
        } catch (err) {
            return res.status(500).json('Server Error')
        }
    }

    userSignUp = async (req, res, next) => {
        // const validationErr = validationResult(req)
        let userExist = await authService.findUser({
            email: req.body.user.email,
        })
        // if (!validationErr.isEmpty()) {
        //     return res.status(400).json({ errors: validationErr.array() })
        // }
        if (userExist) {
            if (req.body.user.external) {
                let token = await this.createToken(
                    userExist.email,
                    userExist.role.id,
                    userExist.id,
                    userExist.external
                )
                return res.status(200).json({
                    name: userExist.name,
                    role: userExist.role.id,
                    token: token,
                    external: userExist.external,
                })
            }
            return res.status(400).json('User Exists Already')
        } else {
            let password = await this.createPassword(req.body.user.password)
            try {
                const result = await authService.signUp(req.body.user, password)
                const message = `${
                    result.name
                } has joined us on ${new Date().toLocaleDateString()}`
                const type = 'user'
                if (req.body.user.external) {
                    let token = await this.createToken(
                        result.email,
                        result.role.id,
                        result.id,
                        userExist.external
                    )
                    return res.status(200).json({
                        name: result.name,
                        role: result.role.id,
                        token: token,
                    })
                }
                return res.status(200).json('Successfully Registered')
            } catch (err) {
                console.log(err)
                return res.status(500).json('Server Error')
            }
        }
    }

    createPassword = async (password) => {
        let salt = await bcrypt.genSalt(10)
        let hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    }
    comparePassword = async (password, hashedPassword) => {
        let result = await bcrypt.compare(password, hashedPassword)
        return result
    }

    createToken = async (
        email,
        role, //number
        id, // number
        external // boolean
    ) => {
        const token = await jwt.sign(
            {
                id: id,
                email: email,
                role: role,
                external: external,
            },
            'secretKey',
            { expiresIn: '2h' }
        )
        return token
    }
}

module.exports = AuthController 
