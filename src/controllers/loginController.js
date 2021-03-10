'use strict';

const controller = require('./base');
const constants = require('../utils/constants');
const loginService = require('../services/loginService');

module.exports = {
    postLogin: async (req, res) => {
        try {
            const result = await loginService.getToken(req.body);
            res.status(constants.statusCode.SUCCESS.CODE).send(result);
        } catch (err) {
            controller.sendErrorResponse(res, err);
        }
    }
}