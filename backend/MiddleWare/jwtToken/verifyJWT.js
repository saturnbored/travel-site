const express = require('express')
const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next) {
    let token = req.headers.authorization.split(' ')[1]
    if (token) {
        jwt.verify(token, 'secretKey', (err, result) => {
            if (err) {
                return res.status(403).json({
                    errors: [
                        {
                            msg: 'Unauthorized User...',
                        },
                    ],
                })
            } else {
                req.user = result
                return next()
            }
        })
    } else {
        return res.status(401).json({
            errors: [
                {
                    msg: 'Token Not Found..',
                },
            ],
        })
    }
}

module.exports = { verifyJWT }
