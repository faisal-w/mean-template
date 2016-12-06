//config/db.js

module.exports = {
    url : 'mongodb://localhost/mean-devdb'
}

/*
Now that this file is defined and we’ve called it in our server.js 
using var db = require('./config/db');, you can call any items 
inside of it using db.url.
*/