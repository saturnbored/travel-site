const express = require('express')
const { ROLES } = require('../role.constants');

const checkRole = (req, res, next) => {
    const role = +req.headers.role
    if (role === ROLES.ADMIN || role === ROLES.USER) {
        return next()
    } else {
        return res.status(401).json({
            errors: [
                {
                    msg: 'Access Denied....',
                },
            ],
        })
    }
}

module.exports = {
    checkRole,
}