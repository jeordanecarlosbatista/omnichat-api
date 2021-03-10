'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = {
    verify: (token) => {
        try {
            jwt.verify(token, config.user.cert);
            return true;
        } catch (err) {
            return false;
        }
    },
    sign: () => {
        const token = jwt.sign(
            { user: config.user.username },
            config.user.cert,
            { expiresIn: '1d' }
        );
        return token;
    },
    decode: (token) => {
        return jwt.decode(token);
    }
}