'use strict';

const LoginService = require('../../services/loginService');
const Database = require('../../db');

describe('LoginService Suit Tests', () => {

    const service = new LoginService();

    beforeEach(async () => await Database.start());

    it.skip('getToken', async () => {
        await service.getToken({
            username: "finder",
            password: "up123456"
        })
    });
})