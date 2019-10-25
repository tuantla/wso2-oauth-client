var woodlot = require('woodlot')


var logger = woodlot.customLogger({
    streams: ['./logs/custom.log'],
    stdout: true,
    format: {
        type: 'json'
    }
});

var middlewareLogger = woodlot.middlewareLogger({
        streams: ['./logs/custom.log'],
        stdout: true,
        format: {
            type: 'json'
        }
    }
)

module.exports = {logger, middlewareLogger}