'use strict';

const mongoose = require('mongoose');

const config = require('../config');
const log = require('../log');

module.exports = {
    start: async () => {
        mongoose.connect(config.db.mongo, {
            useNewUrlParser: true,
            autoReconnect: false,
            useUnifiedTopology: true,
            retryWrites: true,
            poolSize: 3
        }).then((data) => { log.log('DB connected!') });
    }
}