'use strict';

const logger = require('tracer').console({
    transport: (data) => console.log(data.output)
});

module.exports = {
    log: (err) => {
        logger.log(err);
    },
    trace: (err) => {
        logger.trace(err);
    },
    debug: (err) => {
        logger.debug(err);
    },
    info: (err) => {
        logger.info(err);
    },
    warn: (err) => {
        logger.warn(err);
    },
    error: (err) => {
        logger.error(err);
    }
}