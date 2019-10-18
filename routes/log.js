var loggly = require('loggly');

var client = loggly.createClient({
    token: "3a26a0e8-9526-425b-9231-ff5ea70017a9",
    subdomain: "robin84",
    // auth: {
    //     username: "your-username",
    //     password: "your-password"
    // },
    tags: ['fake-rest'],
    json: true
});

module.exports = client