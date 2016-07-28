var path = require('path');
var isDev = process.env.ENV === 'production'

var config = {
    PUBLIC_DIR : path.resolve(__dirname, 'src/public'),
    port : isDev ? 8080 : 80,
}

module.exports = config;
